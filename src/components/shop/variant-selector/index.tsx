import { useState, useReducer, useEffect } from 'react'

import Styles from './style.module.css'

class ElementData {
	public selected: string = ''
}

interface PropsInterface {
	variants: string[]
	defaultVariant: string
	onChangeVariant: (val: string) => void
}

export default function VariantSelectorComponent(props: PropsInterface): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	useEffect(() => {
		d.selected = props.defaultVariant
		forceUpdate()
	}, [props.defaultVariant])

	function selectVariant(variant: string): void {
		d.selected = variant
		props.onChangeVariant(variant)
		forceUpdate()
	}

	function variantRenderer(variant: string, index: number): JSX.Element {
		const selected: boolean = d.selected === variant
		return (
			<div key={index} className={`${Styles['variant-container']} ${selected ? Styles['selected'] : ''}`} onClick={(): void => selectVariant(variant)}>
				<p className="text-[12px]">{variant}</p>
			</div>
		)
	}

	return (
		<div className="flex flex-row flex-wrap gap-2">
			{props.variants.map(variantRenderer)}
		</div>
	)
}