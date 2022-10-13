/*
 * @Description: css
 * @Author: Mankeung
 * @Date: 2022-09-26 21:30:26
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 00:38:12
 */

import { CSSOptions } from 'vite'
import postCssPxToRem from 'postcss-pxtorem'
import config from './px2rem'
import { PX2REM } from '../constant'

const css: CSSOptions = {
    preprocessorOptions: {
        scss: {
            javascriptEnabled: true,
            additionalData: `
                    @import "@/style/themes.scss";
                    @import "@/style/mixins.scss";
                `
        }
    }
}

if (PX2REM) css.postcss = {
    plugins: [
        postCssPxToRem(config)
    ]
}

export default css