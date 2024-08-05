# PPMB's Blog

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

### PWA

You can use PWA to install the website on your device.


## Update

### Web


You do not need to upgrade, when I commit to GitHub, GitHub Action will automatically update GitHub Pages, so the website and GitHub repository are theoretically the same version.

### Docker

You need to re-download the container and run it again using the `docker run` command.

### pnpm

You need to pull the latest repository from GitHub and reinstall the dependencies.

```sh
git pull
cd blog
pnpm install
```

### PWA

By default, the latest version is used.