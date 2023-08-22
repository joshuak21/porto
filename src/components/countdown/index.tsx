import { useEffect } from 'react'
import { useCountdown } from '@/@utils/countdown'
import * as StringHelper from '@/@utils/string'

import Styles from './style.module.css'

interface PropsInterface {
	targetDate: number,
	withLabel?: boolean,
	isOver: () => void,
	className?: string,
	labelClassName?: string,
}

export default function CountdownTimer(props: PropsInterface): JSX.Element {
	const [days, hours, minutes, seconds] = useCountdown(props.targetDate)

	useEffect(() => {
		if (days + hours + minutes + seconds <= 0) {
			props.isOver()
		}
	}, [days, hours, minutes, seconds, props])

	if (days + hours + minutes + seconds <= 0) {		
		return (<></>)
	}

	return (
		<Counter days={ days } hours={ hours } minutes={ minutes } seconds={ seconds } withLabel={props.withLabel} className={props.className} labelClassName={props.labelClassName}/>
	)
}

function Counter(data: {
	days: number, hours: number,
	minutes: number, seconds: number,
	withLabel?: boolean,
	className?: string, labelClassName?: string,
}): JSX.Element {
	const timeDisplay = (value: number, type: string): JSX.Element => {
		return (
			<div className={StringHelper.trim(`${Styles.timeDisplayContainer} ${data.withLabel ? Styles.timeDisplayContainerLabeled : ''}`)}>
				<p>{value}</p>
				{data.withLabel && (<span className={StringHelper.trim(data.labelClassName || '')}>{type}</span>)}
			</div>
		)
	}

	return (
		<div className={StringHelper.trim(`${Styles.CounterContainer} ${data.className || ''}`)}>
			{timeDisplay(data.days, 'Days')}
			<p>:</p>
			{timeDisplay(data.hours, 'Hours')}
			<p>:</p>
			{timeDisplay(data.minutes, 'Mins')}
			<p>:</p>
			{timeDisplay(data.seconds, 'Secs')}
		</div>
	)
}