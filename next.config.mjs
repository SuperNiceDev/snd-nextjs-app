/** @type {import('next').NextConfig} */
const nextConfig = {
  // :::::::::::::::::::::::::::::::::::::::::::: transpile packages

  // https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages
  transpilePackages: [
    "snd-react-lib",
    // "snd-react-lib_test",
    // "lodash-es"
  ],

  // experimental: {
  //   externalDir: true,
  // },
};

export default nextConfig;
