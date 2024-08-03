This project is a static website built using Vuerpress and Vuepress-Theme-Hope, and is deployed through GitHub Pages、GitLab Pages and Cloudflare.

这个项目是一个使用 Vuerpress 和 Vuepress-Theme-Hope 构建的静态网站，并通过 GitHub Pages、GitLab Pages 和 Cloudflare 进行部署。

## Usage

### Web

You can access the website through the following links: 

你可以通过以下链接访问网站：

1. [Github Pages](https://blog.ppmblszdp.xyz/)

### Docker 

You can use Docker to run the website locally.

你可以在本地使用 Docker 运行网站。

```sh
docker run -p 80:80 ppmb/blog:latest
```

### pnpm

You can clone the repository from GitHub and use pnpm to install the dependencies and run the website locally.

你可以从 GitHub 克隆仓库，使用 pnpm 安装依赖并运行网站。

```sh
git clone https://github.com/pandaymx/blog.git
cd blog
pnpm install
pnpm run docs:dev
```
