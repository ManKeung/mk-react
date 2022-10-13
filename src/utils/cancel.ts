/*
 * @Description: 取消请求
 * @Author: Mankeung
 * @Date: 2022-09-28 12:30:43
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 12:34:01
 */

export default () => {
	if (!window._cancelHttpArr || !window._cancelHttpArr.length) return

	window._cancelHttpArr.forEach((fn, index) => {
		fn()
		delete window._cancelHttpArr[index]
	})
}
