/*
 * @Description: 刷新页面
 * @Author: Mankeung
 * @Date: 2022-10-06 21:58:52
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:42:44
 */

import NpHoc from '@/hooks/NpHoc'

export default function Page() {
	NpHoc()

	useEffect(() => {
		window.history.go(-1)
	}, [])

	return null
}
