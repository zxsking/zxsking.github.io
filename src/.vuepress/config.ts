import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


// // .vuepress/config.ts
// import { getDirname, path } from "@vuepress/utils";


// const __dirname = getDirname(import.meta.url);




//总配置

export default defineUserConfig({
  base: "/gk-blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Gking's blog",
      description: "自己来选择,不会后悔的道路",
    },
  },
  // 导入主题配置
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
