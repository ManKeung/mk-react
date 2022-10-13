module.exports = {
    description: '创建组件',
    prompts: [
        {
            type: 'list',
            name: 'type',
            message: '请选择组件类型',
            choices: ['page', 'component'],
            default: 'page'
        },
        {
            type: 'list',
            name: 'css',
            message: '请选择css语言',
            choices: ['css', 'less', 'scss'],
            default: 'scss'
        },
        {
            type: 'input',
            name: 'name',
            message: '请输入组件名称',
            validate: (v) => {
                if (!v || v.trim === '') {
                    return '组件名称不能为空'
                } else {
                    return true
                }
            }
        }
    ],
    actions: (data) => {
        let path = ''
        let path2 = ''
        const type = data.type

        if (type === 'component') {
            path = 'src/components/{{properCase name}}/index.tsx'
            path2 = 'src/components/{{properCase name}}/index.{{css}}'
        } else {
            path = 'src/pages/{{camelCase name}}/index.tsx'
            path2 = 'src/pages/{{camelCase name}}/index.{{css}}'
        }

        const actions = [{
            type: 'add',
            path: path2,
            templateFile: 'templates/component/css.hbs'
        }]

        if (type === 'component') {
            actions.push({
                type: 'add',
                path: path,
                templateFile: 'templates/component/com.hbs'
            })
        } else {
            actions.push({
                type: 'add',
                path: path,
                templateFile: 'templates/component/index.hbs'
            })
        }

        return actions
    }
}
