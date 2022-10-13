module.exports = {
    description: '创建全局状态',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: '请输入模块名称',
            validate: (v) => {
                if (!v || v.trim === '') {
                    return '模块名称不能为空'
                } else {
                    return true
                }
            }
        }
    ],
    actions: (data) => {
        const actions = [
            {
                type: 'add',
                path: `src/store/${data.name}/index.ts`,
                templateFile: 'templates/store/index.hbs'
            },
            {
                type: 'add',
                path: `src/store/${data.name}/actions.ts`,
                templateFile: 'templates/store/actions.hbs'
            },
            {
                type: 'add',
                path: `src/store/${data.name}/reducer.ts`,
                templateFile: 'templates/store/reducer.hbs'
            },
            {
                type: 'add',
                path: `src/store/${data.name}/sagas.ts`,
                templateFile: 'templates/store/sagas.hbs'
            },
            {
                type: 'add',
                path: `src/store/${data.name}/selector.ts`,
                templateFile: 'templates/store/selector.hbs'
            },
            {
                type: 'add',
                path: `src/store/${data.name}/types.ts`,
                templateFile: 'templates/store/types.hbs'
            },
        ]
        return actions
    }
}
