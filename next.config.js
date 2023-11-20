/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'out',
  trailingSlash: true,
  generateEtags: true,
  distDir: 'out',
  // assetPrefix:'https://jamesdroyce.com/experiment/out/_next',
  // basePath: ".",
  images: {
    remotePatterns: [ 
      {
        protocol: "https",
        hostname: "www.northstarsurgery.com",
        port: "",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;