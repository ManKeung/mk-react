/*
 * @Description: 秘钥
 * @Author: Mankeung
 * @Date: 2021-07-30 15:56:21
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 12:56:36
 */

import CryptoJs from 'crypto-js'

export default {
	crypot: {
		key: CryptoJs.enc.Utf8.parse('AB12CEF54687ADC9'),
		iv: CryptoJs.enc.Utf8.parse('123ACBEF8940BDE9')
	},
	publickey: `-----BEGIN PUBLIC KEY-----
	MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7dbfrgRWzgI42zpIYgXDciR5S
	M0mVJXJwUIfjnC0wCf61E9z/757xrEvT1Qwrv2FuWLKWK448C/kLkbbrCnY9TGJm
	RV5BwqFS7SlWthoT5+FlRatcm4oneiUykbQjVyMGYmYCsrO4MxCQBwZJAYcilzIT
	ixoy5R1KHeaSpYpHcwIDAQAB
	-----END PUBLIC KEY-----
	`
}
