import type { UserConfigExport } from "@tarojs/cli";
export default {
   logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {},
  module: {
    rules: [
      {
        test: /\.json$/,
        type: "json",
      },
      // other rules...
    ],
  },
} satisfies UserConfigExport<'webpack5'>
