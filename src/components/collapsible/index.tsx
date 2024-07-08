import { useState, useReducer, useEffect } from 'react'

import Styles from './style.module.css'

export interface PropsInterface {
	title: string
	icon?: { active: string, inactive: string }
	controlled?: boolean
	isActive?: boolean
	children: JSX.Element
	onClick?: () => void,

	titleClassName?: string
	className?: string
	style?: React.CSSProperties
}

class ElementData {
	public active: boolean = false
}

export default function CollapsibleComponent(props: PropsInterface): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	useEffect(() => {
		if (props.controlled) {
			d.active = !!props.isActive
			forceUpdate()
		}
	}, [props.isActive])

	function toggle(): void {
		if (props.controlled) {
			props.onClick &&
			props.onClick()
		} else {
			d.active = !d.active
			forceUpdate()
		}

	}

	return (
		<div className={`${props.className}`}>
			<div onClick={toggle} className="flex flex-row bg-[#FFFFFF] p-2 cursor-pointer items-center">
				<i className={`${props.icon ? (d.active && `uil-${props.icon.active}` || `uil-${props.icon.inactive}`) : (d.active && 'uil-angle-up' || 'uil-angle-down')} text-xl leading-none`}/>
				<h4 className={`${props.titleClassName} text-base`}>{props.title}</h4>
			</div>
			<div className={`${d.active ? 'visible' : 'hidden'}`}>
				{props.children}
			</div>
		</div>
	)
}