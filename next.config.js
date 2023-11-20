/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'out',
  // trailingSlash: true,
  // generateEtags: false,
  // assetPrefix:'https://jamesdroyce.com/experiment/out/_next',
  // basePath: ".",
  NETLIFY_NEXT_PLUGIN_SKIP : true ,
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