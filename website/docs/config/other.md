# 其他

:::tip 提示
这里介绍几个可能你项目需要的配置，但是目前模板没有配置。
:::

## 压缩字体

我们项目中可能会使用UI设计使用的字体，这时我们引入字体时会发现很大，这时我们可以优化。

### font-spider-plus

font-spider-plus（字蛛+）是一个智能 WebFont 压缩工具，它能自动分析出本地页面和线上页面使用的 WebFont 并进行按需压缩。

> 详细使用[查看文档](https://github.com/allanguys/font-spider-plus)

## unocss

[UnoCSS](https://uno.antfu.me/) 是一个具有高性能且极具灵活性的即时原子化 CSS 引擎，受 Windi CSS、Tailwind CSS、Twind 的启发

### 安装

```bash
pnpm add unocss -D
```

### unicss.config.ts

根目录创建文件，代码如下：

```ts
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
    exclude: ['node_modules', '.git', '.github', '.husky', '.vscode', 'build', 'dist', 'mock', 'public', 'stats.html'],
    presets: [presetUno(), presetAttributify(), presetIcons()],
    shortcuts: [],
    rules: [],
    theme: {
        colors: {
        primary: 'var(--primary-color)',
        primary_hover: 'var(--primary-color-hover)',
        primary_pressed: 'var(--primary-color-pressed)',
        primary_active: 'var(--primary-colornocss-active)',
        info: 'var(--info-color)',
        info_hover: 'var(--info-color-hover)',
        info_pressed: 'var(--info-color-pressed)',
        info_active: 'var(--info-color-active)',
        success: 'var(--success-color)',
        success_hover: 'var(--success-color-hover)',
        success_pressed: 'var(--success-color-pressed)',
        success_active: 'var(--success-color-active)',
        warning: 'var(--warning-color)',
        warning_hover: 'var(--warning-color-hover)',
        warning_pressed: 'var(--warning-color-pressed)',
        warning_active: 'var(--warning-color-active)',
        error: 'var(--error-color)',
        error_hover: 'var(--error-color-hover)',
        error_pressed: 'var(--error-color-pressed)',
        error_active: 'var(--error-color-active)',
        },
    },
})
```

### build/vite/plugins/unocss.ts

监听配置文件修改自动重启Vite

```ts
import Unocss from 'unocss/vite'

export default () => {
    return Unocss()
}
```

### build/vite/plugins/index.ts

```ts
import unocss from './unocss'

...
const vitePlugins: any = [
    vue(),
    vueJsx({
        transformOn: true,
        mergeProps: true
    }),
    legacy(),
    html(conf),
    autoImport(),
    components(),
    banner(),
    icon(),
    unocss()
]
...
```

## [vite-plugin-imagemin](https://www.npmjs.com/package/vite-plugin-imagemin)

Vite图片压缩。

### 因为imagemin在国内不好安装，所以提供几个解决方案

1. 使用yarn在package.json内配置（推荐）

```json
"resolutions": {
    "bin-wrapper": "npm:bin-wrapper-china"
}
```

2. 使用npm，在电脑host文件加上以下配置

```ini
199.232.4.133 raw.githubusercontent.com
```

3. 使用cnpm安装（不推荐）

## [vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert)

使用mkcert 为 vite https 开发服务提供证书支持。
