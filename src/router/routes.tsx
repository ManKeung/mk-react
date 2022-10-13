/*
 * @Description: 路由
 * @Author: Mankeung
 * @Date: 2022-10-06 17:50:51
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 22:14:48
 */

import Home from '@/pages/home'
import Reload from '@/pages/reload'
import NotFound from '@/pages/404'

const routes: RouteProps[] = [
	{
		path: '/',
		meta: {
			title: {
				'zh-CN': '首页',
				'en-US': 'home'
			}
		},
		element: Home
	},
	{
		path: '/reload',
		meta: {
			title: {
				'zh-CN': '刷新中',
				'en-US': 'refreshing'
			}
		},
		element: Reload
	},
	{
		path: '*',
		meta: {
			title: {
				'zh-CN': '找不到页面',
				'en-US': 'page not found'
			}
		},
		element: NotFound
	}
]

export default routes

// ! 路由懒加载 https://blog.csdn.net/kzj0916/article/details/126249202
// ! keep-alive https://blog.csdn.net/pfourfire/article/details/126302966?spm=1001.2101.3001.6650.18&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-18-126302966-blog-124440924.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-18-126302966-blog-124440924.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=22
