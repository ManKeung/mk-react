
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
/*
 * @Description: vite配置
 * @Author: Mankeung
 * @Date: 2022-10-05 23:21:08
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 12:09:34
 */

import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vite from './build/vite'

const __unconfig_default =  ({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd())

    return defineConfig(vite(env))
}

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;