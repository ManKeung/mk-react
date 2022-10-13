/*
 * @Description: 全局挂载
 * @Author: Mankeung
 * @Date: 2022-10-07 16:56:23
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:56:57
 */

import http from '@/http'
import utils from '@/utils'
import pkg from '../../package.json'

const $mk = {
	version: pkg.version,
	http,
	utils
}

if (!window.$mk) window.$mk = $mk

if (import.meta.env.VITE_APP_ENV === 'dev') {
	console.log(
		`\n\n %c ${pkg.name} v${pkg.version} %c ${pkg.author} %c ${pkg.homepage} \n\n`,
		'color: #ffffff; background: #3c9cff; padding:5px 0;',
		'color: #fff;background: #f9ae3d; padding:5px 0;',
		'background: #909399; padding:5px 0;'
	)
}
