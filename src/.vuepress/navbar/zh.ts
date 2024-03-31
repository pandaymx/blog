import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Java",
    icon: '/assets/icon/java.svg',
    prefix: "/java/",
    children: ["javase/"]
  },
  {
    text: "数据库",
    icon: '/assets/icon/database.svg',
    prefix: "/database",
    children:["database/","postgres/","mysql/","oracle/","redis/"]
  },
  {
    text: "实用技术",
    icon: '/assets/icon/technology.svg',
    prefix: '/technology/',
    children: ["markdown/","wsl/","linux/","vscode/","idea/","docker/","git/"]
  }
]);
