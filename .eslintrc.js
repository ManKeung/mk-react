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
