import {
	memo,
	useState,
} from 'react'

import InputQuantityComponent from '@/components/input-quantity'
import SwitchComponent from '@/components/switch'

import Styles from './style.module.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function _FormPart(): JSX.Element {

	const [selectedDate, setSelectedDate] = useState<{
		arrival: Date | undefined,
		departure: Date | undefined
	}> ({
		arrival: new Date(),
		departure: new Date(),
	})

	const [data, setData] = useState<{
		trip: 'one-way' | 'round-trip' | undefined,
		arrival: Date | undefined,
		departure: Date | undefined,
		adults: number,
		children: number,
		insurance: boolean
	}>({
		trip: undefined,
		arrival: undefined,
		departure: undefined,
		adults: 0,
		children: 0,
		insurance: false,
	})

	const onChangeDate = (type: 'arrival' | 'departure', selected: Date | null) => {
		console.log('CHANGE DATE: ', selected)
		setSelectedDate({
			...selectedDate,
			[type]: selected,
		})
	}

	const tripOptions = ['One-way', 'Round-trip']

	const tripRenderer = (trip: string, index: number) => {
		return (
			<div key={index} className={Styles.tripContentContainer}>
				<p>{trip}</p>
			</div>
		)
	}

	return (
		<div className={Styles.FormPart}>
			<div className={Styles.contentContainer}>
				<div className={Styles.tripContainer}>
					{tripOptions.map(tripRenderer)}
				</div>
				<div className={`flex pt-[12px] ${Styles.dateContainer}`}>
					<div className="w-full flex flex-col">
						<span className="w-full">Arrival Date <i className="uil uil-calendar-alt"></i></span>
						<div className={Styles.datePickerContainer}><DatePicker onChange={ (date) => onChangeDate('arrival', date)} selected={selectedDate.arrival}/></div>
					</div>

					<div className="w-full flex flex-col">
						<span className="w-full">Departure Date <i className="uil uil-calendar-alt"></i></span>
						<div className={Styles.datePickerContainer}><DatePicker onChange={ (date) => onChangeDate('departure', date) } minDate={selectedDate.arrival} selected={selectedDate.departure}/></div>
					</div>
				</div>
				<div className={`flex pt-[12px] ${Styles.guestContainer}`}>
					<div className="flex flex-col w-full">
						<p>Adults</p>
						<InputQuantityComponent/>
					</div>
					<div className="flex flex-col w-full">
						<p>Children</p>
						<InputQuantityComponent/>
					</div>
				</div>
				<div className="flex flex-row items-center pt-[12px]">
					<p>With Insurance</p>
					<div className="pl-[12px]">
						<SwitchComponent size="SMALL"/>
					</div>
				</div>
			</div>
		</div>
	)
}

const FormPart = memo(_FormPart)
export default FormPart