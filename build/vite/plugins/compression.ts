/*
 * @Description: 压缩
 * @Author: Mankeung
 * @Date: 2022-10-05 17:04:59
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 00:38:49
 */

import { PluginOption } from 'vite'
import compression from 'vite-plugin-compression'

export default (conf: any) => {
    const { VITE_APP_COMPRESS = '' } = conf
    const compressList = VITE_APP_COMPRESS.split(',')
    const plugin: PluginOption[] = []
    if (compressList.includes('gzip')) {
        plugin.push(
            compression({
                ext: '.gz',
                algorithm: 'gzip',
                deleteOriginFile: true
            })
        )
    }

    if (compressList.includes('brotli')) {
        plugin.push(
            compression({
                ext: '.br',
                algorithm: 'brotliCompress',
                deleteOriginFile: true
            })
        )
    }
    return plugin
}