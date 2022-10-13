/*
 * @Description: mock
 * @Author: Mankeung
 * @Date: 2022-09-26 21:53:55
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-26 21:58:18
 */

import { viteMockServe } from 'vite-plugin-mock'

export default (conf: any) => viteMockServe({
    mockPath: 'mock',
    localEnabled: conf.VITE_APP_ENV === 'dev',
    prodEnabled: conf.VITE_APP_ENV === 'prod' // 实际开发请关闭，会影响打包体积
})