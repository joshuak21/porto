import {
	useEffect,
	useState,
	memo,
}  from 'react'

import * as StringHelper from '@/@utils/string'

import Styles from './style.module.scss'

export interface PropsInterface {
	size: 'SMALL' | 'MEDIUM' | 'LARGE',
	disabled?: boolean,
	state?: boolean,
	onClick?: (e: React.MouseEvent) => void,

	className?: string,
	style?: React.CSSProperties,
}

function _SwitchComponent(props: PropsInterface): JSX.Element  {

	const [isActive, setIsActive] = useState<boolean>(false)

	const onSwitchClick = (e: React.MouseEvent) => {
		if(!props.disabled) {
			props.onClick?.(e)
			setIsActive(!isActive)
		}
	}

	return (
		<div onClick={onSwitchClick}
			className={StringHelper.trim(`
				${Styles.SwitchComponent}
				${isActive  ? Styles.active : ''}
				${Styles['container-' + props.size]}
				${props.disabled ? Styles.disabled : ''}
				${props.className || ''}
			`)}
			style={props.style}>
			<div className={`${Styles.toggle} ${Styles['toggle-' + props.size]} ${isActive ? Styles['toggleActive-' + props.size] : ''}`}/>
		</div>
	)
}

const SwitchComponent = memo(_SwitchComponent)
export default SwitchComponent