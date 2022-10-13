/*
 * @Description: 路由
 * @Author: Mankeung
 * @Date: 2022-10-06 16:56:07
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 23:27:52
 */

import { Route } from 'react-router-dom'
import i18n from '@/lang'

const DomTitle: React.FC<any> = ({ route }: { route: RouteProps }) => {
	const lang = i18n.language as 'zh-CN' | 'en-US'
	document.title = (route.meta.title[lang] || 'mkimq') + '-' + import.meta.env.VITE_APP_TITLE

	if (!route.element) return null

	return <route.element />
}

function RenderRoute(arr: RouteProps[] | undefined) {
	if (!arr || !arr.length) return null

	return arr.map((item, index) => (
		<Route path={item.path} element={<DomTitle route={item} />} key={index}>
			{RenderRoute(item.children)}
		</Route>
	))
}

export default RenderRoute
