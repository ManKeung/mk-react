/*
 * @Description: svg icon
 * @Author: Mankeung
 * @Date: 2022-09-26 17:17:38
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-26 17:19:08
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default () => createSvgIconsPlugin({
    // 配置路劲在你的src里的svg存放文件
    iconDirs: [path.resolve(process.cwd(), 'src/icons')],
    symbolId: 'icon-[dir]-[name]'
})