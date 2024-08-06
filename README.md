# 皮皮萌宝的博客

<div align="center">

简体中文 | [English](./README-en.md)

</div>

这个项目是一个使用 Vuerpress 和 Vuepress-Theme-Hope 构建的静态网站，并通过 GitHub Pages、GitLab Pages 和 Cloudflare 进行部署。

## 使用

### 网站


你可以通过以下链接访问网站：

1. [Github Pages](https://blog.ppmblszdp.xyz/)

### Docker 

你可以在本地使用 Docker 运行网站。

```sh
docker run -p 80:80 ppmb/blog:latest
```

### pnpm

你可以从 GitHub 克隆仓库，使用 pnpm 安装依赖并运行网站。

```sh
git clone https://github.com/pandaymx/blog.git
cd blog
pnpm install
pnpm run docs:dev
```

### PWA

你可以使用 PWA 在你的设备上安装网站。

## 更新

### Web

你无需升级，当我提交到 GitHub 时，GitHub Action 会自动更新 GitHub Pages，因此网页和 GitHub 仓库理论上未同一版本。

### Docker

你需要重新使用 `docker run` 命令重新下载容器并运行。

### pnpm

从 GitHub 上拉取最新仓库并重新安装依赖。

```sh
git pull
cd blog
pnpm install
```

### PWA

默认使用最新版本。