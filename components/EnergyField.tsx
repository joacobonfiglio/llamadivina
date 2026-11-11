"use client";
import { useEffect, useRef } from "react";

/**
 * Campo de energía: luz que fluye hacia arriba como el calor de una llama,
 * en la paleta del atardecer. Se concentra donde la persona apoya el dedo o el cursor.
 */
const FRAG = `
precision highp float;
uniform vec2 r;
uniform float t;
uniform vec2 m;
uniform float k;
uniform float lift;
uniform vec2 core;

float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 R=mat2(.8,.6,-.6,.8);
  for(int i=0;i<5;i++){v+=a*n(p);p=R*p*2.03;a*=.5;}return v;}

vec3 ramp(float e){
  vec3 noche=vec3(.075,.062,.135);
  vec3 crep=vec3(.25,.19,.38);
  vec3 rosa=vec3(.62,.32,.45);
  vec3 ocaso=vec3(.85,.47,.38);
  vec3 llama=vec3(.94,.66,.37);
  vec3 luz=vec3(1.,.93,.80);
  vec3 c=mix(noche,crep,smoothstep(.0,.32,e));
  c=mix(c,rosa,smoothstep(.30,.55,e));
  c=mix(c,ocaso,smoothstep(.52,.70,e));
  c=mix(c,llama,smoothstep(.68,.84,e));
  c=mix(c,luz,smoothstep(.86,1.05,e));
  return c;
}

void main(){
  vec2 uv=gl_FragCoord.xy/r;
  float ar=r.x/r.y;
  vec2 p=vec2(uv.x*ar,uv.y);
  float tt=t*.045;
  vec2 q=vec2(fbm(p*1.5+vec2(0.,-tt*3.)),fbm(p*1.5+vec2(5.2,1.3-tt*2.2)));
  vec2 w=vec2(fbm(p*1.7+2.2*q+vec2(1.7,9.2)+tt),fbm(p*1.7+2.2*q+vec2(8.3,2.8)-tt));
  float f=fbm(p*1.3+2.6*w-vec2(0.,tt*4.5));

  vec2 c=vec2(core.x*ar,core.y);
  vec2 d=p-c; d.x*=.85;
  float flame=exp(-dot(d,d)*2.6);
  float from=smoothstep(1.2,-.2,uv.y)*lift;

  vec2 mp=vec2(m.x*ar,m.y);
  float md=length(p-mp);
  float touch=exp(-md*md*7.)*k;

  float e=f*.95+flame*.55+from*.35+touch*.55-.42;
  vec3 col=ramp(clamp(e,0.,1.1));
  col+=vec3(1.,.75,.5)*pow(max(f-.55,0.),2.)*1.4*flame;
  float vig=smoothstep(1.35,.25,length((uv-.5)*vec2(ar*.9,1.)));
  col*=mix(.55,1.,vig);
  gl_FragColor=vec4(col,1.);
}`;

const VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`;

type Props = {
  className?: string;
  /** posición del núcleo de luz (0-1, origen abajo a la izquierda) */
  core?: [number, number];
  lift?: number;
};

export default function EnergyField({ className = "", core = [0.72, 0.18], lift = 1 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false, alpha: false });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!gl) {
      canvas.classList.add("no-gl");
      return;
    }
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      canvas.classList.add("no-gl");
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = (n: string) => gl.getUniformLocation(prog, n);
    const uR = U("r"), uT = U("t"), uM = U("m"), uK = U("k"), uL = U("lift"), uC = U("core");

    // render a media resolución: es luz difusa, no necesita más
    const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.5;
    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * scale));
      const h = Math.max(1, Math.round(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const mouse = { x: core[0], y: core[1], tx: core[0], ty: core[1], k: 0, tk: 0 };
    const host = canvas.parentElement!;
    const onMove = (e: PointerEvent) => {
      const b = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - b.left) / b.width;
      mouse.ty = 1 - (e.clientY - b.top) / b.height;
      mouse.tk = 1;
    };
    const onLeave = () => (mouse.tk = 0);
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerdown", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);

    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(canvas);

    let raf = 0;
    const start = performance.now() - 20000;
    const frame = (now: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      mouse.k += (mouse.tk - mouse.k) * 0.04;
      if (visible) {
        gl.uniform2f(uR, canvas.width, canvas.height);
        gl.uniform1f(uT, (now - start) / 1000);
        gl.uniform2f(uM, mouse.x, mouse.y);
        gl.uniform1f(uK, mouse.k);
        gl.uniform1f(uL, lift);
        gl.uniform2f(uC, core[0], core[1]);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    canvas.classList.add("ready");

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerdown", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [core, lift]);

  return <canvas ref={ref} className={`energy ${className}`} aria-hidden="true" />;
}
