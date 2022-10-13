/*
 * @Description: http请求
 * @Author: Mankeung
 * @Date: 2022-09-28 10:18:17
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 12:20:20
 */

import axios from 'axios'
import request from './requestInterceptors'
import response from './responseInterceptors'

axios.defaults.withCredentials = true

const http = axios.create({
	headers: {},
	responseType: 'json',
	timeout: 1000 * 10
})

http.interceptors.request.use(request.onFulfilled, request.onRejected)
http.interceptors.response.use(response.onFulfilled, response.onRejected)

export default http
