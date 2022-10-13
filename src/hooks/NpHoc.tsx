/*
 * @Description: 进度条
 * @Author: Mankeung
 * @Date: 2022-10-06 23:20:02
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:49:23
 */

import NProgress from 'nprogress'

export default () => {
	useEffect(() => {
		NProgress.configure({
			showSpinner: false
		})

		NProgress.done()

		return () => {
			NProgress.start()
		}
	}, [])

	return []
}
