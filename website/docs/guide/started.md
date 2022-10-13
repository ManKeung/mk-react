# 快速开始

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
```

本项目适合了解一定基础的前端工程师，如您对前端知识还不了解，你可以阅读我的[在线文档](https://mankeung.github.io/docs/mk-data)，里面有关于基础前端的介绍。
## 技能准备

:::danger 注意
项目搭建是node版本为`v18.8.0`所以你需要注意，肯能由于版本导致报错哦！
:::

![html5](https://img.shields.io/badge/-Html5-333333?style=flat&logo=html5) ![css3](https://img.shields.io/badge/-css3-333333?style=flat&logo=Css3&logoColor=066eb6) ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript) ![sass](https://img.shields.io/badge/-Sass-333333?style=flat&logo=sass) ![TypeScript](https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript) ![react](https://camo.githubusercontent.com/b8f9baf34dfa59e5cf63be744777f8f01596535a4bcc1502df3cf39a71d41c23/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742d3333333333333f7374796c653d666c6174266c6f676f3d7265616374) ![npm](https://img.shields.io/badge/-Npm-333333?style=flat&logo=npm) ![vite](https://img.shields.io/badge/-Vite-333333?style=flat&logo=vite) ![git](https://img.shields.io/badge/-Git-333333?style=flat&logo=git)


## 安装

[📦 CodeSandbox](https://codesandbox.io/s/github/mankeung/mk-react?file=/README.md) | [⚡ StackBlitz](https://stackblitz.com/github/mankeung/mk-react?file=README.md)

```mdx-code-block
<Tabs>
<TabItem value="github">
```

```bash
git clone https://github.com/mankeung/mk-react.git
```

```mdx-code-block
</TabItem>
<TabItem value="gitee">
```

```bash
git clone https://gitee.com/mankeung/mk-react.git
```

```mdx-code-block
</TabItem>
</Tabs>
```

## 目录结构

如下图所示，打开[github1s查看](https://github1s.com/mankeung/mk-react)

![目录结构](/file.png)

> ~~这里就不再做过多目录结构介绍了，如需要后面就补充说明。~~

## 常用命令介绍

:::tip 提示
我使用的`pnpm`包管理工具，你还可以使用`yarn`或者`npm`
:::

+ `pnpm install`

初始化项目安装依赖

+ `pnpm dev`

启动项目

+ `pnpm build:test`

测试环境打包

+ `pnpm build`

生产环境打包

+ `pnpm lint`

语法校验

+ `pnpm new`

生产模板

> 这里只是做简单介绍，具体详细介绍请看[配置参考scripts](/docs/config/scripts.md)

## 启动

```bash
pnpm dev
```

页面效果看下图

![启动效果](/guide/dev.png)
