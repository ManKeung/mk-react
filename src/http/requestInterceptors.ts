/*
 * @Description: 请求拦截
 * @Author: Mankeung
 * @Date: 2022-09-28 10:19:03
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 11:07:00
 */

import axios, { AxiosRequestConfig } from 'axios'

export default {
	onFulfilled: (config: AxiosRequestConfig<any>) => {
		config.cancelToken = new axios.CancelToken((c) => {
			// ! 全局没挂上设置默认值
			if (!window._cancelHttpArr) window._cancelHttpArr = []

			// TODO 把请求push进去便于取消请求
			window._cancelHttpArr.push(c)
		})

		return config
	},
	onRejected: (error: any) => Promise.reject(error)
}
