/*
 * @Description: cdn导入的包文件
 * @Author: Mankeung
 * @Date: 2022-09-26 16:14:29
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-26 17:14:16
 */

import externals from 'vite-plugin-resolve-externals'

export default (data: any) => externals(data)