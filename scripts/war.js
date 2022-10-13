/*
 * @Description: 静态文件war包
 * @Author: Mankeung
 * @Date: 2022-09-25 14:55:15
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-09-25 14:55:26
 */

const zipFolder = require('folder-zip-sync')
const pkg = require('../package.json')

try {
    zipFolder('./dist', `./dist/${pkg.warName}.war`)
} catch (error) {
    throw new Error('压缩文件出错了')
}
