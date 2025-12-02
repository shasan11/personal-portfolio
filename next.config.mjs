/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
  images: {
    unoptimized: true, // allows any image URL, no domain whitelist
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
