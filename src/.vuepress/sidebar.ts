import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/':[
    "",
    "intro",
    {
      text: '如何使用',
      prefix: 'demo/',
      children: "structure",
      collapsible: true,
    }
  ],
  "/demo/": "structure"
});
