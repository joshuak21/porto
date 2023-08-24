import { memo, useState } from 'react'
import NextImage from 'next/image'

import InputQuantityComponent from '@/components/input-quantity'
import SwitchComponent from '@/components/switch'

import Styles from './style.module.scss'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import SkyBG from '../../../../public/img/booking/banner/sky.jpg'
import HotelTypePart from './_hotel'

type FormEnum = 'HOTEL' | 'PLANE' | 'TRAIN' | 'BUS' | 'CAR_RENTAL'

type TripType = {
	key: FormEnum
	title: string
	icon: string
}

function _FormPart(): JSX.Element {

	const
		[selectedDate, setSelectedDate] = useState<{
			arrival: Date | undefined,
			departure: Date | undefined
		}> ({
			arrival: new Date(),
			departure: new Date(),
		}),

		[data, setData] = useState<{
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
		}),

		[formType, setFormType] = useState<FormEnum>('HOTEL'),

		tabs: Array<TripType> = [
			{ key: 'HOTEL', title: 'Hotel', icon: 'building' },
			{ key: 'PLANE', title: 'Plane', icon: 'plane-fly' },
			{ key: 'TRAIN', title: 'Train', icon: 'metro' },
			{ key: 'BUS', title: 'Bus', icon: 'bus' },
			{ key: 'CAR_RENTAL', title: 'Car Rental', icon: 'car-sideview' },
		]

	const onChangeDate = (type: 'arrival' | 'departure', selected: Date | null) => {
		console.log('CHANGE DATE: ', selected)
		setSelectedDate({
			...selectedDate,
			[type]: selected,
		})
	}

	function onChangeType(type: FormEnum): void {
		setFormType(type)
	}

	const tripOptions = ['One-way', 'Round-trip']

	const tripRenderer = (trip: string, index: number) => {
		return (
			<div key={index} className={Styles.tripContentContainer}>
				<p>{trip}</p>
			</div>
		)
	}

	const tripTypeRenderer = (type: TripType): JSX.Element => {
		return (
			<div key={type.key} className={`trip-type-container ${formType === type.key ? 'active' : ''}`} onClick={(): void => onChangeType(type.key)}>
				<span><i className={`uil uil-${type.icon}`}/> {type.title}</span>
			</div>
		)
	}

	return (
		<div className={Styles.FormPart}>
			<div className="image-container-wrapper">
				<div className="w-full h-full absolute">
					<NextImage src={SkyBG} alt="object-cover w-full h-full"/>
				</div>
				<div className={Styles.contentContainer}>
					{/* <div className={Styles.tripContainer}>
						{tripOptions.map(tripRenderer)}
					</div> */}
					<div className="trip-types-container">
						{tabs.map(tripTypeRenderer)}
					</div>
					<HotelTypePart/>
					{/* <div className={`flex pt-[12px] ${Styles.dateContainer}`}>
						<div className="w-full flex flex-col">
							<span className="w-full text-[#fff] font-medium">Arrival Date <i className="uil uil-calendar-alt"></i></span>
							<div className={Styles.datePickerContainer}><DatePicker onChange={ (date) => onChangeDate('arrival', date)} selected={selectedDate.arrival}/></div>
						</div>

						<div className="w-full flex flex-col">
							<span className="w-full text-[#fff] font-medium">Departure Date <i className="uil uil-calendar-alt"></i></span>
							<div className={Styles.datePickerContainer}><DatePicker onChange={ (date) => onChangeDate('departure', date) } minDate={selectedDate.arrival} selected={selectedDate.departure}/></div>
						</div>
					</div>
					<div className={`flex pt-[12px] ${Styles.guestContainer}`}>
						<div className="flex flex-col w-full">
							<p className="text-[#fff] font-medium">Adults</p>
							<InputQuantityComponent/>
						</div>
						<div className="flex flex-col w-full">
							<p className="text-[#fff] font-medium">Children</p>
							<InputQuantityComponent/>
						</div>
					</div>
					<div className="flex flex-row items-center pt-[12px]">
						<p className="text-[#fff] font-medium">With Insurance</p>
						<div className="pl-[12px]">
							<SwitchComponent size="SMALL"/>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

const FormPart = memo(_FormPart)
export default FormPart