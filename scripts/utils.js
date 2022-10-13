/*
 * @Description: 工具函数
 * @Author: Mankeung
 * @Date: 2022-10-02 14:58:09
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-02 15:00:59
 */

const { exec } = require('child_process')

function funExec(commd) {
    return new Promise(resolve => {
        try {
            exec(commd, (err, stdout) => {
                if (err) return resolve(null)
                resolve(stdout)
            })
        } catch (error) {
            resolve(null)
        }
    })
}

module.exports = {
    funExec
}