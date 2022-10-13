/*
 * @Description: reducer
 * @Author: Mankeung
 * @Date: 2022-10-07 16:17:04
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:18:38
 */

import { combineReducers } from 'redux-immutable'
import { reducer as common } from './common'

export default combineReducers({
	common
})
