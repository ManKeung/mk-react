const pkg = require('../../package.json')
const CONST = require('./constant')

const navbar = [
    {
        type: 'search',
        position: 'right'
    },
    {
        type: 'doc',
        docId: 'intro',
        position: 'right',
        label: 'ðææ '
    },
    {
        type: 'doc',
        docId: 'config',
        position: 'right',
        label: 'ðéç½®åè'
    },
    {
        type: 'doc',
        docId: 'function',
        position: 'right',
        label: 'ðª§åè½'
    },
    {
        type: 'doc',
        docId: 'api',
        position: 'right',
        label: 'ðAPI'
    },
    {
        type: 'dropdown',
        position: 'right',
        label: `â¨v${pkg.version}`,
        items: [
            {
                type: 'doc',
                label: 'ðæ´æ°æ¥å¿',
                docId: 'changelog'
            }
        ]
    },
    {
        type: 'doc',
        docId: 'reward',
        position: 'right',
        label: 'ðæèµ'
    },
    {
        href: 'https://gitee.com/mankeung/mk-react',
        label: 'Gitee',
        position: 'right'
    }
]










navbar.push({
    href: CONST.GIT,
    label: CONST.GIT_SITE.substring(0,1).toUpperCase() + CONST.GIT_SITE.substring(1),
    position: 'right'
})

module.exports = navbar
