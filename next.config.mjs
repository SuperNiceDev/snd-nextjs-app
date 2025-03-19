import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // :::::::::::::::::::::::::::::::::::::::::::: webpack

  // https://nextjs.org/docs/app/api-reference/config/next-config-js/webpack
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // config.module.rules.push({
    //   test: /\.mdx/,
    //   use: [
    //     options.defaultLoaders.babel,
    //     {
    //       loader: "@mdx-js/loader",
    //       options: pluginOptions.options,
    //     },
    //   ],
    // });
    return config;
  },

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

  // :::::::::::::::::::::::::::::::::::::::::::: etags

  // https://nextjs.org/docs/app/api-reference/next-config-js/generateEtags
  // generateEtags: false,

  // :::::::::::::::::::::::::::::::::::::::::::: standalone build

  // https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files
  // https://mytchall.dev/removing-the-build-folders-when-deploying-next-js-on-plesk/
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  distDir: ".next",

  // https://nextjs.org/docs/pages/api-reference/next-config-js/output#caveats
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../../"),
    // outputFileTracingRoot: "../../../",
  },

  // :::::::::::::::::::::::::::::::::::::::::::: ignores

  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
