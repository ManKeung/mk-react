/*
 * @Description: actions
 * @Author: Mankeung
 * @Date: 2022-10-07 15:17:33
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:36:46
 */

import * as types from './types'

export const setCount = (count: number) => ({
	type: types.COUNT,
	count: count
})
