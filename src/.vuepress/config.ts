import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "皮皮萌宝的博客",
      description: "皮皮萌宝的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "ppmb's blog",
      description: "ppmb's blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
