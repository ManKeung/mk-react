/*
 * @Description: 拷贝与剪切
 * @Author: Mankeung
 * @Date: 2022-09-28 18:48:01
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 21:06:35
 */

/**
 * @Author: Mankeung
 * @description: 拷贝
 * @param {T} val 值
 * @return {Promise<any>}
 */
const copy = <T>(val: T): Promise<any> => {
	const clipboard = navigator.clipboard

	return new Promise((resolve, reject) => {
		if (!clipboard) return reject('当前浏览器不支持拷贝')

		clipboard
			.writeText(JSON.stringify(val))
			.then(() => {
				resolve(val)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

/**
 * @Author: Mankeung
 * @description: 粘贴
 * @return {Promise<string>}
 */
const shear = (): Promise<string> => {
	const clipboard = navigator.clipboard

	return new Promise((resolve, reject) => {
		if (!clipboard) return reject('当前浏览器不支持粘贴')

		clipboard
			.readText()
			.then((val) => {
				resolve(val)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

export default {
	copy,
	shear
}
