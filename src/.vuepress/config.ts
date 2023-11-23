import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  head: [
    [
      "script", {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6269542893674001",
        crossorigin: "anonymous"
      }
    ],
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
