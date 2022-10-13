/*
 * @Description: 依赖分析
 * @Author: Mankeung
 * @Date: 2022-10-05 16:52:36
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 16:54:33
 */

import visualizer from 'rollup-plugin-visualizer'

export default () => {
    return visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true, // 注意这里要设置为true，否则无效
        gzipSize: true,
        brotliSize: true
    })
}