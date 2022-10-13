/*
 * @Description: resolve
 * @Author: Mankeung
 * @Date: 2022-09-26 21:42:45
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 21:31:08
 */

import path from 'path'

const paths = [
    {
        name: '@',
        path: 'src'
    }
]

const alias: any = {}

paths.forEach(item => {
    alias[item.name] = getPath(item.path)
})

export default {
    alias
}

function getPath(p: string) {
    return path.resolve(process.cwd(), p)
}