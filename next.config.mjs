import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// @ts-check

export default function nextConfigFunc(phase, { defaultConfig, ...rest }) {
  console.log("phase: ", phase);
  console.log("rest: ", rest);

  /**
   * @type {import('next').NextConfig}
   */
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
      // "lodash-es"
    ],

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

    // typescript: {
    //   ignoreBuildErrors: true,
    // },

    // eslint: {
    //   ignoreDuringBuilds: true,
    // },
  };

  return nextConfig;
}
