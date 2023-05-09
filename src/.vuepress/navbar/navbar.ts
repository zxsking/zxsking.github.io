import { navbar } from "vuepress-theme-hope";

const MY_PROGRAM_ICON = '<svg t="1683506335895" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2751" width="200" height="200"><path d="M192 797.867l51.2-115.2-34.133-12.8-51.2 115.2c-12.8-4.267-25.6-4.267-34.134-4.267C55.467 780.8 0 836.267 0 904.533S55.467 1024 123.733 1024s123.734-55.467 123.734-123.733c0-42.667-21.334-81.067-55.467-102.4z m-68.267 192c-46.933 0-89.6-38.4-89.6-89.6 0-46.934 42.667-89.6 89.6-89.6s89.6 42.666 89.6 89.6-42.666 89.6-89.6 89.6zM900.267 0C832 0 776.533 55.467 776.533 123.733S832 247.467 900.267 247.467 1024 192 1024 123.733 968.533 0 900.267 0z m0 213.333c-46.934 0-89.6-42.666-89.6-89.6s38.4-89.6 89.6-89.6c46.933 0 89.6 38.4 89.6 89.6s-42.667 89.6-89.6 89.6z m-601.6 174.934c-68.267 0-123.734 55.466-123.734 123.733S230.4 635.733 298.667 635.733c64 0 115.2-46.933 123.733-106.666h123.733v-34.134H422.4c-8.533-59.733-59.733-106.666-123.733-106.666z m0 213.333c-46.934 0-85.334-42.667-85.334-89.6s38.4-89.6 85.334-89.6 89.6 38.4 89.6 89.6c0 46.933-38.4 89.6-89.6 89.6z m494.933-192l51.2-115.2-34.133-12.8-51.2 115.2c-12.8-4.267-25.6-4.267-34.134-4.267-68.266 0-123.733 55.467-123.733 123.734S657.067 640 725.333 640s123.734-55.467 123.734-123.733c0-46.934-25.6-85.334-55.467-106.667z m-68.267 192c-46.933 0-89.6-38.4-89.6-89.6 0-46.933 38.4-89.6 89.6-89.6s85.334 42.667 85.334 89.6-38.4 89.6-85.334 89.6z" p-id="2752"></path></svg>'

export const zhNavbar = navbar([
  //导航栏
  "/",
  {
    text: "编程语言",
    icon: "discover",
    prefix: "/program/",
    children: [
      "java/",
      "c/",
      "go/",
      "javascript/"
    ]
  },
  {
    text: "学校",
    icon: 'study',
    link: "/study/",
  },
  {
    text: "日记",
    icon: 'note',
    link: "/diary/",
  }
]);





