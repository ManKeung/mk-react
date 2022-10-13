/*
 * @Description: 首页
 * @Author: Mankeung
 * @Date: 2022-10-06 18:16:16
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 17:02:11
 */

import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '@/components/Button'
import SvgIcon from '@/components/SvgIcon'
import i18n from '@/lang'
import NpHoc from '@/hooks/NpHoc'
import { action, selector } from '@/store/common'

export default function Page() {
	NpHoc()

	const count = useSelector(selector.getCount)
	const dispatch = useDispatch()
	const { t: $t } = useTranslation()
	const navigate = useNavigate()

	useEffect(() => {
		window.$mk.http.get('/api/get').then((data) => {
			console.log('mock模拟数据')
			console.log(data)
			console.log('mock模拟数据')
		})
	}, [])

	// TODO 刷新页面
	const reload = () => {
		navigate('/reload')
	}

	// TODO 切换语言
	const changeLang = () => {
		const lang = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN'

		i18n.changeLanguage(lang)
		localStorage.setItem('__LANG__', lang)
		reload()
	}

	// TODO 去文档
	const handleDocs = () => {
		window.open('https://mankeung.github.io/docs/mk-react')
	}

	// TODO 新增
	const handleAdd = () => {
		dispatch(action.setCount(count + 1))
	}

	return (
		<div className='home'>
			<SvgIcon name='logo' className='logo' onClick={handleDocs} />
			<h1>{$t('title')}</h1>
			<div className='home-btn'>
				<Button size='big' onClick={handleAdd}>
					{$t('count') + count}
				</Button>
				<Button size='big' className='button' onClick={changeLang}>
					{$t('lang')}
				</Button>
				<Button size='big' onClick={reload}>
					{$t('reload')}
				</Button>
			</div>
			<p
				className='p'
				dangerouslySetInnerHTML={{
					__html: $t('txt')
				}}
			></p>
			<p>
				访问代码仓库：
				<a href='https://www.github.com/mankeung/mk-react' target='_blank' className='a' rel='noreferrer'>
					[github]
				</a>
				<a href='https://www.gitee.com/mankeung/mk-react' target='_blank' className='a' rel='noreferrer'>
					[gitee]
				</a>
			</p>
			<p style={{ color: '#888' }} className='read-the-docs'>
				mkimq{$t('copyright')} © 2022
			</p>
		</div>
	)
}
