/*
 * @Description: 按钮
 * @Author: Mankeung
 * @Date: 2022-10-06 20:36:48
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-06 21:50:55
 */

import React from 'react'
import './index.scss'

export type ButtonProps = {
	onClick?: React.MouseEventHandler<HTMLElement>
	size?: 'big' | 'min'
	children?: React.ReactNode
	stop?: boolean
	className?: string
}

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props) => {
	const { onClick, size, stop, children, className } = props
	const cls = size ? `mk-button mk-button-${size}` : 'mk-button'

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (stop) {
			e.preventDefault()
			return
		}

		(onClick as React.MouseEventHandler<HTMLDivElement>)?.(e)
	}

	return (
		<div className={cls + `${className ? ' ' + className : ''}`} onClick={handleClick}>
			{children ?? 'button'}
		</div>
	)
}

export default Button
