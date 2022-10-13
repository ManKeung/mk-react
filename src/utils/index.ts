/*
 * @Description: 工具函数
 * @Author: Mankeung
 * @Date: 2022-09-28 12:30:01
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 21:48:56
 */

import Mitt from 'mitt'
import hotkeys from 'hotkeys-js'
import Xss from 'xss'
import cancel from './cancel'
import encrypt from './encrypt'
import crypto from './crypto'
import debounce from './debounce'
import throttle from './throttle'
import deepClone from './deepClone'
import clipboard from './clipboard'

/**
 * @Author: Mankeung
 * @description: 防止xss共计
 * @param {string} val 字符串
 * @return {string}
 */
function xss(val: string): string {
	return Xss(val, {
		whiteList: {
			img: ['url']
		}
	})
}

export default {
	cancel,
	mitt: Mitt(),
	hotkeys,
	xss,
	encrypt,
	crypto,
	debounce,
	throttle,
	deepClone,
	clipboard
}
