/*
 * @Description: 按钮
 * @Author: Mankeung
 * @Date: 2022-10-06 20:36:48
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 19:36:22
 */

import './index.scss'

export type SvgIconProps = {
	prefix?: string
	name: string
	color?: string
	className?: string
	onClick?: React.MouseEventHandler<HTMLOrSVGElement>
}

const SvgIcon: React.ForwardRefRenderFunction<unknown, SvgIconProps> = (props) => {
	const symbolId = `#${props.prefix || 'icon'}-${props.name}`

	const handleClick = (e: React.MouseEvent<HTMLOrSVGElement>) => {
		(props.onClick as React.MouseEventHandler<HTMLOrSVGElement>)?.(e)
	}

	return (
		<svg aria-hidden='true' className={props.className} onClick={handleClick}>
			<use href={symbolId} fill={props.color} />
		</svg>
	)
}

export default SvgIcon
