/*
 * @Description: html
 * @Author: Mankeung
 * @Date: 2022-09-26 16:39:46
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 12:06:22
 */

import { createHtmlPlugin } from 'vite-plugin-html'
import cdnArr from '../cdn'

export default (conf: any): any => {
    const cdn: any = {
        css: [],
        js: []
    }

    const data: any = {
        title: conf?.VITE_APP_TITLE ?? 'mkimq react',
        debugTool: conf?.VITE_APP_DEBUG_TOOL ?? '',
        cdn
    }

    if (conf.VITE_APP_CDN === 'ON') {
        cdn.css = cdnArr.map(e => e.css).filter(e => e)
        cdn.js = cdnArr.map(e => e.js).filter(e => e)
        data.cdn = cdn
    }

    const html = createHtmlPlugin({
        inject: {
            data
        },
        minify: conf?.VITE_APP_ENV === 'prod'
    })

    return html
}