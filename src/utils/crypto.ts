/*
 * @Description: 对称加解密
 * @Author: Mankeung
 * @Date: 2022-09-28 13:10:08
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-05 21:21:00
 */

import CryptoJS from 'crypto-js'
import secretKey from '@/config/secretKey'

/**
 * @Author: Mankeung
 * @description: 加密
 * @param {T} value 加密数据
 * @return {string}
 */
const en = <T>(value: T): string => {
	try {
		const srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(value))
		const encrypted = CryptoJS.AES.encrypt(srcs, secretKey.crypot.key, {
			iv: secretKey.crypot.iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})
		return encrypted.toString()
	} catch (error: any) {
		console.error(`加密数据${value}出错了~`)
		throw new Error(error)
	}
}

/**
 * @Author: Mankeung
 * @description: 解密
 * @param {string} en
 * @return {unknown}
 */
const de = (en: string): unknown => {
	if (!en) throw new Error('en参数不能为空')

	try {
		const decrypt = CryptoJS.AES.decrypt(en, secretKey.crypot.key, {
			iv: secretKey.crypot.iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		})
		const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
		return JSON.parse(decryptedStr.toString())
	} catch (error: any) {
		console.log('en参数不能为空')
		throw new Error(error)
	}
}

export default {
	en,
	de
}
