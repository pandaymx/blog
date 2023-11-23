import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
    {
      text: '主要功能和配置演示',
      link: '/demo/',
      icon: 'laptop-code'
    },
    {
      text: '文章',
      prefix: '/posts/',
      children: [
          {
            text: 'apple',
            prefix: 'apple/',
            children: [
              "1",
              "2"
            ]
          },
          "cherry",
      ]
    },
    {
      text: '百度',
      link: 'https://www.baidu.com',
    }
]);
