/*
 * @Description: vite 插件
 * @Author: Mankeung
 * @Date: 2022-09-26 15:32:00
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-10 21:53:53
 */

import react from '@vitejs/plugin-react'
import restart from './restart'
import legacy from './legacy'
import html from './html'
import autoImport from './autoImport'
import banner from './banner'
import icon from './icon'
import externals from './externals'
import cdn from '../cdn'
import mock from './mock'
import visualizer from './visualizer'
import compression from './compression'
import progress from './progress'
import { ANALYSIS } from '../../constant'
import inspector from './inspector'

export default (conf: any): any => {
    const vitePlugins: any = [
        react(),
        legacy(),
        html(conf),
        autoImport(),
        banner(),
        icon(),
        progress()
    ]

    if (conf.VITE_APP_CDN === 'ON') {
        const obj: any = {}

        cdn.forEach(pkg => {
            obj[pkg.name] = pkg.library
        })

        vitePlugins.push(externals(obj))
    }

    if (conf.VITE_APP_ENV === 'dev') vitePlugins.push(restart())
    // TODO 使用unshift因为需要添加到`react()`前面不然没效果哦
    if (conf.VITE_APP_ENV === 'dev') vitePlugins.unshift(inspector())
    if (conf.VITE_APP_MOCK === 'ON') vitePlugins.push(mock(conf))
    if (ANALYSIS) vitePlugins.push(visualizer())
    if (conf.VITE_APP_COMPRESS) vitePlugins.push(...compression(conf))

    return vitePlugins
}