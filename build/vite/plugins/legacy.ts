/*
 * @Description: 支持旧浏览器
 * @Author: Mankeung
 * @Date: 2022-09-26 17:00:13
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-26 17:01:46
 */

import legacy from '@vitejs/plugin-legacy'

export default () => legacy({
    targets: ['defaults', 'not IE 11']
})