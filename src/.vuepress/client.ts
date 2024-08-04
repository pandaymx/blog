import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/snowFall.js";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2024-08-03"),
      {
        "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
    setupTransparentNavbar({ type: "homepage" });
    setupSnowFall();
  },
});