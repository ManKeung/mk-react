/*
 * @Description: 自动导入
 * @Author: Mankeung
 * @Date: 2022-09-26 17:06:24
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 12:05:08
 */

import autoImport from 'unplugin-auto-import/vite'

export default () => autoImport({
    imports: [
        'react'
    ],
    dts: 'src/types/auto-imports.d.ts'
})