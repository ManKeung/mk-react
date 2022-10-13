/*
 * @Description: reducer
 * @Author: Mankeung
 * @Date: 2022-10-07 15:26:29
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:11:58
 */

import { Map } from 'immutable'
import * as types from './types'

type Common = {
	type: string
	count: number
}

// 默认值
const defaultState = Map({
	count: 0,
	title: 'eee'
})

export default (state = defaultState, action: Common) => {
	switch (action.type) {
		case types.COUNT:
			return state.setIn(['count'], action.count)
		default:
			return state
	}
}
