/*
 * @Description: 接口代理
 * @Author: Mankeung
 * @Date: 2022-09-26 15:44:34
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-26 15:47:53
 */

export default {
    '/api': {
        target: 'http://www.mkimq.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
    },
    '/soket.io': {
        target: 'ws://www.mkimq.cn'
    }
}