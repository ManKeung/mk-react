/*
 * @Description: 性能检测工具
 * @Author: Mankeung
 * @Date: 2022-10-06 10:13:00
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 10:20:57
 */

import { ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(onPerfEntry)
			getFID(onPerfEntry)
			getFCP(onPerfEntry)
			getLCP(onPerfEntry)
			getTTFB(onPerfEntry)
		})
	}
}

export default reportWebVitals
