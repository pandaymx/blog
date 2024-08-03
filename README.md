This project is a static website built using Vuerpress and Vuepress-Theme-Hope, and is deployed through GitHub Pages、GitLab Pages and Cloudflare.

## Usage

### Web

You can access the website through the following links: 

1. [Github Pages](https://blog.ppmblszdp.xyz/)

### Docker 

You can use Docker to run the website locally.

```sh
docker run -p 80:80 ppmb/blog:latest
```

### pnpm

You can clone the repository from GitHub and use pnpm to install the dependencies and run the website locally.

```sh
git clone https://github.com/pandaymx/blog.git
cd blog
pnpm install
pnpm run docs:dev
```
