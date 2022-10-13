/*
 * @Description: 非对称加密
 * @Author: Mankeung
 * @Date: 2022-09-28 12:55:32
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 13:07:42
 */

import { JSEncrypt } from 'jsencrypt'
import secretKey from '@/config/secretKey'

/**
 * @Author: Mankeung
 * @description: 非对称加密
 * @param {any} val 加密参数
 * @return {string}
 */
export default (val: any): string => {
	try {
		const encrypt = new JSEncrypt()
		encrypt.setPublicKey(secretKey.publickey)

		const str = encrypt.encrypt(val)
		if (typeof str === 'string') return str
		throw new Error(`${val}非对称加密失败~`)
	} catch (error: any) {
		console.error(`${val}非对称加密失败~`)
		throw new Error(error)
	}
}
