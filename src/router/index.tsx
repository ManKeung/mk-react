/*
 * @Description: 路由
 * @Author: Mankeung
 * @Date: 2022-10-06 18:18:40
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 23:12:28
 */

import { BrowserRouter as Router, Routes } from 'react-router-dom'
import routes from './routes'
import render from './render'

export default function router() {
	return (
		<Router>
			<Routes>{render(routes)}</Routes>
		</Router>
	)
}
