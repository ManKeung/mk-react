/*
 * @Description: 接口数据模拟
 * @Author: Mankeung
 * @Date: 2022-09-26 22:06:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-28 12:21:01
 */

import { MockMethod } from 'vite-plugin-mock'
import CODE from '../src/http/code'

const api: MockMethod[] = [
    {
        url: '/api/get',
        method: 'get',
        response: ({ query }) => {
            console.log(query)
            return {
                code: CODE.OK,
                data: {
                    name: 'vben'
                }
            }
        }
    },
    {
        url: '/api/text',
        method: 'post',
        rawResponse: async (req, res) => {
            let reqbody = ''
            await new Promise((resolve) => {
                req.on('data', (chunk) => {
                    reqbody += chunk
                })
                req.on('end', () => resolve(undefined))
            })
            res.setHeader('Content-Type', 'text/plain')
            res.statusCode = 200
            res.end(`hello, ${reqbody}`)
        }
    }
]

export default api