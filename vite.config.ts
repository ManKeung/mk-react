/*
 * @Description: vite配置
 * @Author: Mankeung
 * @Date: 2022-10-05 23:21:08
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 12:09:34
 */

import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vite from './build/vite'

export default ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())

    return defineConfig(vite(env))
}
