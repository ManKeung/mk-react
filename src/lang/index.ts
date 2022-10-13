/*
 * @Description: 国际化
 * @Author: Mankeung
 * @Date: 2022-09-27 23:08:26
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 21:52:56
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 引入统计目录下文件
const modules = import.meta.glob('./*.ts', { eager: true })

const resources: any = {}

for (const path in modules) {
	const arr: any = path.substring(path.lastIndexOf('/') + 1).split('.')
	const name: any = arr[0]
	resources[name] = {
		translation: (modules[path] as any).default
	}
}

const lng = localStorage.getItem('__LANG__') || 'zh-CN'

i18n.use(initReactI18next).init({
	resources,
	lng,
	interpolation: {
		escapeValue: false
	}
})

export default i18n
