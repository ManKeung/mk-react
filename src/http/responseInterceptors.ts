/*
 * @Description: 响应拦截
 * @Author: Mankeung
 * @Date: 2022-09-28 10:19:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 12:16:18
 */

import axios, { AxiosResponse } from 'axios'
import CODE from './code'

export default {
	onFulfilled: (response: AxiosResponse<any, any>) => {
		if (response.data?.code === CODE.OK) return Promise.resolve(response.data)

		return Promise.reject(response.data)
	},
	onRejected: (error: any) => {
		if (axios.isCancel(error)) return Promise.reject(error)

		return Promise.reject(error)
	}
}
