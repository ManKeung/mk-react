/*
 * @Description: 节流函数
 * @Author: Mankeung
 * @Date: 2022-09-28 13:19:06
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 13:19:12
 */

/**
 * @Author: Mankeung
 * @description: 节流函数
 * @param {Function} func 目标函数
 * @param {number} wait 延迟时间
 * @param {number} type 1 表时间戳版，2 表定时器版
 * @return {Function}
 */
export default (func: Function, wait = 1000, type = 2): Function => {
	let previous = 0
	let timer: any | null = null

	return function (this: any) {
		const context = this
		const args = arguments
		if (type === 1) {
			const now = Date.now()

			if (now - previous > wait) {
				func.apply(context, args)
				previous = now
			}
		} else if (type === 2) {
			if (!timer) {
				timer = setTimeout(() => {
					timer = null
					func.apply(context, args)
				}, wait)
			}
		}
	}
}
