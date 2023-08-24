import {
	useEffect,
	useState,
	memo,
} from 'react'

import * as StringHelper from '@/@utils/string'

import Styles from './style.module.scss'

export interface PropsInterface {
	min?: number,
	max?: number,
	qty?: number,
	onChange?: (qty: number) => void,

	className?: string,
	style?: React.CSSProperties
}

function _InputQuantityComponent({
	min = 0,
	qty = 0,
	...props
}: PropsInterface): JSX.Element {

	const [quantity, setQuantity] = useState<number>(qty)

	const onReduce = () => {
		if((quantity - 1) >= min) {
			setQuantity(quantity-1)
			props.onChange?.(quantity-1)
			return
		}
	}

	const onIncrease = () => {
		if(props.max && (quantity + 1) > props.max) {
			setQuantity(quantity+1)
			props.onChange?.(quantity+1)
			return
		}

		setQuantity(quantity+1)
		props.onChange?.(quantity+1)
		return
	}

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = parseInt(e.currentTarget.value, 10)
		if(isNaN(val)) {
			e.currentTarget.value = ''
		} else {
			e.currentTarget.value = val.toString()
			setQuantity(val)
			props.onChange?.(val)
		}
	}

	return (
		<div className={StringHelper.trim(`${Styles.inputQuantityContainer} ${props.className || ''}`)} style={props.style}>
			<div onClick={onReduce} className={Styles.button}>
				<i className="uil uil-minus"></i>
				{/* <span>-</span> */}
			</div>
			<input type="number" min={min} max={props.max} value={quantity} onChange={onChangeInput} className={Styles.inputQuantity}/>
			<div onClick={onIncrease} className={Styles.button}>
				<i className="uil uil-plus"></i>
				{/* <span>+</span> */}
			</div>
		</div>
	)
}

const InputQuantityComponent = memo(_InputQuantityComponent)
export default InputQuantityComponent