import { useState } from 'react'

import InputQuantityComponent from '@/components/input-quantity'
import SwitchComponent from '@/components/switch'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Styles from './style.module.scss'

export default function HotelTypePart(): JSX.Element {

	const
		[date, setDate] = useState<{
			start: Date | null,
			end: Date | null,
		}>({
			start: new Date(),
			end: new Date()
		})

	function onChangeDate(key: keyof typeof date, val: Date | null): void {
		setDate((_state: typeof date) => ({
			..._state,
			[key]: val
		}))
	}

	return (
		<div className="pt-[12px]">
			<div className="flex gap-[1rem]">
				<div className="w-full flex flex-col">
					<span className="w-full font-medium">Arrival Date <i className="uil uil-calendar-alt"></i></span>
					<div className={Styles.datePickerContainer}><DatePicker onChange={ (date) => onChangeDate('start', date)} selected={date.start}/></div>
				</div>

				<div className="w-full flex flex-col">
					<span className="w-full font-medium">Departure Date <i className="uil uil-calendar-alt"></i></span>
					<div className={Styles.datePickerContainer}><DatePicker onChange={ (date) => onChangeDate('end', date) } minDate={date.start} selected={date.end}/></div>
				</div>
			</div>
			<div className="flex pt-[12px] gap-[1rem]">
				<div className="flex flex-col w-full">
					<p className="font-medium">Adults</p>
					<InputQuantityComponent/>
				</div>
				<div className="flex flex-col w-full">
					<p className="font-medium">Children</p>
					<InputQuantityComponent/>
				</div>
			</div>
			<div className="flex flex-row items-center pt-[12px]">
				<p className="font-medium">With Insurance</p>
				<div className="pl-[12px]">
					<SwitchComponent size="SMALL"/>
				</div>
			</div>
		</div>
	)
}