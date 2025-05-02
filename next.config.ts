import type { NextConfig } from "next";

// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const nextConfigFunc = (
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig },
) => {
  // console.log("phase: ", phase);
  // console.log("rest: ", rest);

  const nextConfig: NextConfig = {
    ...defaultConfig,

    // :::::::::::::::::::::::::::::::::::::::::::: webpack

    // https://nextjs.org/docs/app/api-reference/config/next-config-js/webpack
    // webpack: (
    //   config,
    //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
    // ) => {
    //   // config.module.rules.push({
    //   //   test: /\.mdx/,
    //   //   use: [
    //   //     options.defaultLoaders.babel,
    //   //     {
    //   //       loader: "@mdx-js/loader",
    //   //       options: pluginOptions.options,
    //   //     },
    //   //   ],
    //   // });
    //   return config;
    // },

    // :::::::::::::::::::::::::::::::::::::::::::: transpile packages

    // https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages
    // transpilePackages: [
    //   "snd-react-lib",
    //   // "lodash-es"
    // ],

    // experimental: {
    //   externalDir: true,
    // },

    // :::::::::::::::::::::::::::::::::::::::::::: etags

    // https://nextjs.org/docs/app/api-reference/next-config-js/generateEtags
    // generateEtags: false,

    // :::::::::::::::::::::::::::::::::::::::::::: standalone build

    // https://nextjs.org/docs/app/api-reference/config/next-config-js/output
    // https://mytchall.dev/removing-the-build-folders-when-deploying-next-js-on-plesk/
    output: "standalone",

    // https://nextjs.org/docs/pages/api-reference/next-config-js/output#caveats
    // outputFileTracingRoot: path.join(__dirname, "../../../"),
    // outputFileTracingRoot: "../../../",

    // :::::::::::::::::::::::::::::::::::::::::::: ignores

    typescript: {
      ignoreBuildErrors: true,
    },

    eslint: {
      ignoreDuringBuilds: true,
    },
  };

  return nextConfig;
};

export default nextConfigFunc;
