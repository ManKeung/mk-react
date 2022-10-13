/*
 * @Description: 配置开发服务
 * @Author: Mankeung
 * @Date: 2022-09-26 15:37:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 16:51:42
 */

import { ServerOptions } from 'vite'
import proxy from './proxy'
import { OPEN as open, PORT as port } from '../constant'

export default (env: any): ServerOptions => {
    const config: ServerOptions = {
        open,
        port
    }

    if (env.VITE_APP_PROXY === 'ON') config.proxy = proxy

    return config
}