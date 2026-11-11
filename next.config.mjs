/** @type {import('next').NextConfig} */
const preview = process.env.PREVIEW_EXPORT === "1";
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(preview ? { output: "export", assetPrefix: "./", images: { unoptimized: true } } : {}),
};
export default nextConfig;
