/*
 * @Description: 重启开发服务
 * @Author: Mankeung
 * @Date: 2022-09-26 16:53:47
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 12:12:35
 */

import restart from 'vite-plugin-restart'

export default () => restart({
    restart: ['.env.dev', 'build/**/*.ts']
})