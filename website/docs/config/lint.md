# 代码规范

:::tip 注意
这里不做详细配置说明，你可以查看之前文章[**前端代码工作流**](https://mankeung.github.io/docs/mk-data/tools_article/23.html)、[**从 0 到 1 搭建一个企业级前端开发规范**](https://mankeung.github.io/docs/mk-data/tools_article/23.html)了解。
:::

## EditorConfig

### .editorconfig

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

```mdx-code-block
</details>
```

### .vscode/settings.json

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```json
{
    // highlight-next-line
	"editor.tabSize": 4,
	"cSpell.words": [
		"cmfcmf"
	]
}
```

```mdx-code-block
</details>
```

## eslint

### 安装

```bash
pnpm add eslint eslint-plugin-react eslint-plugin-react-hooks -D
```

### .eslintrc.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react-hooks'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    settings: {
        'react': {
            'version': 'detect'
        }
    },
    env: {
        // 您的环境变量（包含多个预定义的全局变量）
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 您的全局变量（设置为 false 表示它不允许被重新赋值）
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // 自定义您的规则
        // Customize your rules
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        'prefer-rest-params': 'off',
        // 'no-use-before-define': [
        //   'error',
        //   {
        //     functions: false,
        //     classes: true,
        //   },
        // ],
        '@typescript-eslint/no-use-before-define': 'off',
        // '@typescript-eslint/no-use-before-define': [
        //   'error',
        //   {
        //     functions: false,
        //     classes: true,
        //   },
        // ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        'space-before-function-paren': 'off',
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never'],
    }
}
```

```mdx-code-block
</details>
```

### .eslintignore


```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ini
# 根据自己的实际需求进行添加

# npm

node_modules

# folder

dist
public
templates
docs
www
scripts

# file

postcss.config.js
babel.config.js
.eslintrc.js
plopfile.js
.stylelintrc.js
.prettierrc.js
*.json
*.html
*.d.ts

# vscode

.vscode
```

```mdx-code-block
</details>
```

### npm命令配置

```json
"lint:eslint": "eslint --fix \"src/**/*.{js,jsx,ts,tsx}\""
```

## stylelint

### 安装

```bash
pnpm add stylelint stylelint-config-standard stylelint-order stylelint-scss -D
```

### .stylelintrc.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order', 'stylelint-scss'],
    customSyntax: 'postcss-html',
    rules: {
        indentation: 4,
        'media-feature-name-no-unknown': null,
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {

                ignorePseudoClasses: ['deep', 'global'],
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {

                ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
            },
        ],
        'at-rule-no-unknown': [
            true,
            {

                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'function',
                    'if',
                    'each',
                    'include',
                    'mixin',
                    'at-root'
                ],
            },
        ],
        'no-empty-source': null,
        'named-grid-areas-no-invalid': null,
        'unicode-bom': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        // 'declaration-block-trailing-semicolon': 'always',
        'rule-empty-line-before': [
            'always',
            {

                ignore: ['after-comment', 'first-nested'],
            },
        ],
        'unit-no-unknown': [true, {
            ignoreUnits: ['rpx']
        }],
        'keyframes-name-pattern': null,
        'order/order': [
            [
                'dollar-variables',
                'custom-properties',
                'at-rules',
                'declarations',
                {

                    type: 'at-rule',
                    name: 'supports',
                },
                {

                    type: 'at-rule',
                    name: 'media',
                },
                'rules',
            ],
            {
                severity: 'warning'
            },
        ],
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'float',
            'width',
            'height',
            'max-width',
            'max-height',
            'min-width',
            'min-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-collapse',
            'margin-top-collapse',
            'margin-right-collapse',
            'margin-bottom-collapse',
            'margin-left-collapse',
            'overflow',
            'overflow-x',
            'overflow-y',
            'clip',
            'clear',
            'font',
            'font-family',
            'font-size',
            'font-smoothing',
            'osx-font-smoothing',
            'font-style',
            'font-weight',
            'hyphens',
            'src',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'color',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-size-adjust',
            'text-shadow',
            'text-transform',
            'word-break',
            'word-wrap',
            'white-space',
            'vertical-align',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'pointer-events',
            'cursor',
            'background',
            'background-attachment',
            'background-color',
            'background-image',
            'background-position',
            'background-repeat',
            'background-size',
            'border',
            'border-collapse',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-color',
            'border-image',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-spacing',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'border-radius-topright',
            'border-radius-bottomright',
            'border-radius-bottomleft',
            'border-radius-topleft',
            'content',
            'quotes',
            'outline',
            'outline-offset',
            'opacity',
            'filter',
            'visibility',
            'size',
            'zoom',
            'transform',
            'box-align',
            'box-flex',
            'box-orient',
            'box-pack',
            'box-shadow',
            'box-sizing',
            'table-layout',
            'animation',
            'animation-delay',
            'animation-duration',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'animation-fill-mode',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'background-clip',
            'backface-visibility',
            'resize',
            'appearance',
            'user-select',
            'interpolation-mode',
            'direction',
            'marks',
            'page',
            'set-link-source',
            'unicode-bidi',
            'speak',
        ],
    },
    // 忽略其他文件，只校验样式相关的文件
    ignoreFiles: [
        'node_modules/**/*',
        'public/**/*',
        'template/**/*',
        'build/**/*',
        'dist/**/*',
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
    ],
}
```

```mdx-code-block
</details>
```

### .stylelintignore

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```ini
# npm

node_modules

# folder

dist
public
templates

# file

postcss.config.js
babel.config.js
.eslintrc.js
.prettierrc.js
plopfile.js
.stylelintrc.js
*.json
*.html
normalize.scss
*.d.ts

# vscode

.vscode
```

```mdx-code-block
</details>
```

### npm命令配置

```json
"lint:style": "stylelint --fix \"src/**/*.{scss,less,vue,css}\" --cache --cache-location node_modules/.cache/stylelint/"
```

## prettier

### 安装

```bash
pnpm add prettier --dev
```

### .prettierrc.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
module.exports = {
    printWidth: 180, //一行的字符数，如果超过会进行换行，默认为80
    tabWidth: 4, //一个tab代表几个空格数，默认为80
    useTabs: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
    singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
    semi: false, //行位是否使用分号，默认为true
    vueIndentScriptAndStyle: true,
    trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
    bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    jsxSingleQuote: true, // jsx语法中使用单引号
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'auto'
}
```

```mdx-code-block
</details>
```

### npm命令配置

```json
"lint:prettier": "prettier --write  \"src/**/*.{js,jsx,ts,tsx,json,css,less,scss,vue,html,md}\""
```

## husky

### 安装

```bash
pnpm add husky @commitlint/cli @commitlint/config-conventional
```

### commitlint.config.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新特性
                'improvement', // 加强现有特性
                'fix', // 修补bug
                'refactor', // 重构
                'docs', // 文档
                'test', // 单元测试
                'config', // 配置文件
                'style', // 格式需改
                'perf', // 性能提升
                'ci', // ci 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
                'revert', // 版本回退
                'chore', // 其他修改
                'scope' // commit 影响的范围（选填）, 比如: route, component, utils, build
            ]
        ],
        'type-empty': [2, 'never'], // type不能为空
        'type-case': [0, 'always', 'lower-case'], // type不限制大小写
        'subject-empty': [2, 'never'], // subject（简短得描述）不能为空
        'subject-max-length': [1, 'always', 50], // subject最大长度，超出只会警告，不阻止提交
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 72]
    }
}
```

```mdx-code-block
</details>
```

### scripts/prepare.js

```mdx-code-block
<details>
    <summary>点击查看详情</summary>
```

```js
const { funExec } = require('./utils')
const chalk = require('chalk')

async function init() {
    const child = await funExec('git diff --cached --name-only')

    if (!child) {
        console.log(chalk.red('没有待提交内容'))
        process.exit(1)
    }

    const disSubmitFiles = await inExcludeFile(child.trim().split('\n'))

    if (disSubmitFiles.length) {
        disSubmitFiles.forEach(file => {
            console.log(`${chalk.red('禁止提交文件：')}${chalk.green(file)}`)
            console.log(`${chalk.red('你可以使用：')}${chalk.green(`git reset -- ${file}`)} ${chalk.red('撤销暂存区')}`)
        })
        process.exit(1)
    } else {
        console.log(chalk.green('用户权限校验完成'))
    }
}

function inExcludeFile(files) {
    return new Promise(async resolve => {
        // 获取用户
        let userEmail = await funExec('git config --get user.email')
        userEmail = userEmail.replaceAll('\n', '')
        console.log(chalk.green(`校验${userEmail}的权限...`))

        setTimeout(() => {
            // 请求服务器拉取当前用户可操作目录文件（src下根文件哦！）
            const allowPaths = userEmail === 'mankueng1011@gmail.com' ? [] : ['pages'] // 这里写死

            let disSubmitFiles = Array.from(new Set(files.map(item => {
                const arr = item.split('/')
                const isSrc = arr[0] === 'src'

                if (isSrc) return item

                return null
            }))).filter(file => file)

            if (!allowPaths.length) return resolve([])

            disSubmitFiles.forEach((file, i) => {
                allowPaths.some(allowPath => {
                    const reg = new RegExp(`^src/${allowPath}`, 'i')

                    if (reg.test(file)) {
                        disSubmitFiles[i] = null
                        return true
                    }

                    return false
                })

                disSubmitFiles = disSubmitFiles.filter(file => !!file)
                resolve(disSubmitFiles)
            })
        }, 300)
    })
}

init()
```

```mdx-code-block
</details>
```

### npm命令配置

```json
"precommit": "node ./scripts/precommit.js"
```
