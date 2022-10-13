/*
 * @Description: 打包
 * @Author: Mankeung
 * @Date: 2022-09-26 21:35:52
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 00:37:36
 */

import { BuildOptions } from 'vite'
import { OUT_DIR as outDir, ASSETS_DIR as assetsDir, CHUNKS_SIZE as chunkSizeWarningLimit } from '../constant'

export default (conf: any): BuildOptions => ({
    outDir,
    assetsDir,
    sourcemap: conf.VITE_BUILD_SOURCEMAP === 'ON',
    terserOptions: {
        // keep_infinity: conf.VITE_APP_ENV !== 'dev',
        compress: {
            drop_console: conf.VITE_APP_DROP_CONSOLE === 'ON'
        }
    },
    minify: 'terser',
    chunkSizeWarningLimit
})