/*
 * @Description: 函数防抖
 * @Author: Mankeung
 * @Date: 2022-09-28 13:17:10
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 13:20:15
 */

/**
 * @Author: Mankeung
 * @description: 函数防抖
 * @param {Function} func 目标函数
 * @param {number} wait 延迟执行毫秒
 * @param {boolean} immediate true - 立即执行， false - 延迟执行
 * @return {Function}
 */
export default (func: Function, wait = 1000, immediate = false): Function => {
	let timer: any | null = null
	return function (this: any) {
		const context = this
		const args = arguments
		if (timer) clearTimeout(timer)
		if (immediate) {
			const callNow = !timer
			timer = setTimeout(() => {
				timer = null
			}, wait)
			if (callNow) func.apply(context, args)
		} else {
			timer = setTimeout(() => {
				func.apply(context, args)
			}, wait)
		}
	}
}
