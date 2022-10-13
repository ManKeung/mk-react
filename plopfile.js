/*
 * @Description: 创建文件
 * @Author: Mankeung
 * @Date: 2021-09-15 16:06:50
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 19:23:46
 */

module.exports = function (plop) {
    plop.setWelcomeMessage('请选择需要创建的模式：')
    plop.setGenerator('component', require('./templates/component/prompt'))
    plop.setGenerator('store', require('./templates/store/prompt'))
}
