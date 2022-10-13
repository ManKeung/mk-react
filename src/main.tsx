/*
 * @Description: 入口文件
 * @Author: Mankeung
 * @Date: 2022-10-06 11:16:42
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 17:02:41
 */

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Router from './router'
import store from './store'
import './lang'
import './global'
import reportWebVitals from './reportWebVitals'
import 'normalize.css'
import './style/index.scss'
import 'virtual:svg-icons-register'
import { PX2REM } from '../build/constant'

// ! 移动端适配
if (PX2REM) await import('amfe-flexible')

document.addEventListener('mousewheel', () => {}, { passive: true })

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
	// ! 严格模式 useEffect会执行两次哟
	// <React.StrictMode>
	// </React.StrictMode>
	<Provider store={store}>
		<Router />
	</Provider>
)

// 性能检测
reportWebVitals(console.log)
