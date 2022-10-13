/*
 * @Description: sagas
 * @Author: Mankeung
 * @Date: 2022-10-07 16:18:54
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:20:08
 */

import { all } from 'redux-saga/effects'
import { saga as common } from './common'

function* root() {
	yield all([...common])
}

export default root
