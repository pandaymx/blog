--- 
title: 基础
icon: /assets/icon/basic.svg
order: 1
category: 
  - 实用技术
  - WSL
tag:
  - 基础
isOriginal: true
---

## WSL 简介

Windows Subsystem for Linux (WSL) 是 Windows 10 新增的功能，可在 Windows 系统下运行 Linux 子系统。

WSL 与虚拟机相比，性能更高，没有更大的花销。

WSL 2 是新版本也是默认版本，相比较于 WSL 1， WSL 2 更快，但是跨文件系统性能不如前者。WSL 2在Windows 11 或Windows 10 版本1903、内部版本 18362 或更高版本中可用。

## 安装

### 默认安装

以管理员权限打开命令提示符或者 PowerShell，输入以下命令：

```shell
wsl --install
```

:::tip
通过修改 hosts 文件，可以不通过翻墙进行使用。[^1]
:::

### 旧版本

使用win+x键打开终端管理员界面，运行以下命令。

```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

也可通过下方搜索栏中搜索启用或关闭Windows功能。

![启用或关闭Windows功能](assets/启用或关闭%20Windows%20功能.png)

打开后选择适用于Windows的Linux子系统功能和虚拟机平台功能。

![启用功能](assets/启用功能.png)

等待安装之后重启即可。

之后需安装 Linux 内核更新包。

[安装路径](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)，下载之后进行安装，否则会报错。

将 WSL 2 设置为默认版本。

```sh
wsl --set-default-version 2
```

![选择合适发行版](assets/微软商店选择发行版.png)

首次启动新安装的 Linux 分发版时，将打开一个控制台窗口。之后启动时间会变快。

## 基本命令

### 安装

```shell
wsl --install
```

```shell
wsl --install Debian
```

该命令用于安装其他的 Linux 发行版。如果是旧版安装方式，需要使用 `wsl --install -d Debian`，也可以运行升级命令从而使用 `wsl --install Debian`。

### 列出可用的 Linux 发行版

```shell
wsl -l -o
```

微软商店中可用的 Linux 发行版。

### 列出已安装的 Linux 发行版

```shell
wsl -l --v
```

### 设置默认 Linux 发行版

```shell
wsl --set-default <Distribution Name>
```

### 将目录更改为主页

```shell
wsl ~
```

可以在用户主目录来启动。

### 运行特定 Linux 发行版

```shell
wsl -d <Distribution Name> -u <User Name>
```

如果使用默认的 Linux 发行版，去掉前面的 `-d <Distribution Name>` 。

### 更新 wsl

```shell
wsl --update
```

### 更改发行版的默认用户

```shell
<DistributionName> config --default-user <Username>
```

### 卸载发行版

```shell
wsl --unregister <Distribution Name>
```

## 设置用户名和密码

安装用户名和密码后，首次进入需要设置用户名和密码，密码不会显示出来，该账户被设置为管理员账户，可以执行 sudo 命令。


### 忘记密码

默认发行版执行 `wsl -u root`，其他发行版执行 `wsl -d Debian -u root`。

进入后执行 `passwd <username>`，username 为账户名，设置成功后执行 `exit` 退出即可。


<Share colorful />

[^1]: 访问的地址为 raw.githubusercontent.com 。