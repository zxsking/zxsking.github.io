import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  //侧边栏
  "/": [
    "",
    // {
    //   text: "编程语言",
    //   icon: "discover",
    //   prefix: "program/",
    //   children: "structure",
    // },
    // {
    //   text: "学校",
    //   icon: 'study',
    //   prefix: "study/",
    //   children: "structure",
    // },
    // {
    //   text: "日记",
    //   icon: 'note',
    //   prefix: "diary/",
    //   children: "structure",
    // },
    // {
    //   text: "待更",
    //   icon: 'note',
    //   prefix: "updateing/",
    //   children: "structure",
    // },

    // 介绍页
    "intro",

    //幻灯片页
    // "slides",
    
  ],

  "/program/": "structure",
  "/study/": "structure",
  "/diary/": "structure"
});
