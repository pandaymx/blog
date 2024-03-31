--- 
title: 进阶
icon: /assets/icon/advance.svg
order: 2
isOriginal: true
category: 
  - 实用技术
  - WSL
tag:
  - 进阶
---

## 最佳实践

### VS Code

安装 VS Code 并设置环境变量。

安装 [远程开发扩展包](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)。

更新软件包并添加 wget 和 ca 证书。

```sh
sudo apt-get update
sudo apt-get install wget ca-certificates
```

从 wsl 中输入 `code .`即可打开。

某些扩展需要在 wsl 中重新安装。

### Git

安装 Git。

```sh
sudo apt-get install git
```

设置配置文件。

```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"
```

设置 Git 凭据管理器。

::: code-tabs#shell

@tab git版本大于2.39.0

```bash
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
```

@tab git版本大于2.36.1

```bash
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"
```

@tab:active git版本小于2.36.1

```bash
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager-core.exe"
```

:::

### node

```bash
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
exit
wsl
nvm install --lts
```

选择安装的是一个长期支持版本，如果要安装最新版本，可换成 `nvm install node`。

### Docker

1. 安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/) 。
2. settings > Resources > WSL integration 选中需要的 Linux 发行版。（你要确保你已经打开了 WSL 引擎，一般安装前就会显示）。
    ![Docker设置](assets/docker%20设置%20Linux%20发行版.png)

即可在 wsl中使用 docker。

### Google Chrome

```sh
cd /tmp
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt install --fix-broken -y
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudo apt-get install fonts-wqy-microhei ttf-wqy-zenhei language-pack-zh-hans language-pack-gnome-zh-hans language-pack-kde-zh-hans manpages-zh
```

使用 `google-chrome` 即可打开谷歌浏览器，最后一步用于添加中文支持。

## 进阶

### 跨文件系统操作

Windows 中使用 wsl 命令则直接使用 `wsl 命令` 即可，例如 `wsl ls`。

wsl 中使用 Windows 命令使用 `命令.exe` 即可，例如 `ping.exe`。

### 网络

Windows 访问 wsl 系统直接使用localhost即可直接访问。

wsl 访问 Windows `cat /etc/resolv.conf` 查看 `nameserver` 获得其 IP 地址。

局域网访问使用 `netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost` 来实现代理，8080是端口。

:::  warning
配置这点是有缺点的，localhost:端口号不能使用。
:::

### 导入Linux发行版

从 Docker 中导出 Linux 的 tar 文件。

```bash
sudo service docker start
docker run -t centos bash ls /
dockerContainerID=$(docker container ls -a | grep -i centos | awk '{print $1}')
docker export $dockerContainerID > /mnt/c/temp/centos.tar
```

导入并运行：

```shell
cd C:\temp
mkdir E:\wslDistroStorage\CentOS
wsl --import CentOS E:\wslDistroStorage\CentOS .\centos.tar
wsl -d CentOS
```

<Share colorful />