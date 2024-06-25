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
			<button key={type.key} type="button" className={`rounded-md px-4 py-2 duration-500 ease hover:bg-blue-400 hover:text-[#FFFFFF] ${formType === type.key ? 'bg-blue-500 text-[#FFFFFF]' : ''}`} onClick={(): void => onChangeType(type.key)}>
				<span><i className={`uil uil-${type.icon}`}/> {type.title}</span>
			</button>
		)
	}

	return (
		<div className="flex flex-col py-8 bg-[#F9F9F9]">
			<h1 className="text-3xl text-center mb-4">Book what you want, anytime, anywhere</h1>
			<div className="p-4 w-full max-w-[900px] mx-auto my-0 shadow-[0_4px_20px_rgba(0,0,0,.2)] rounded-xl">
				<div className="trip-types-container">
					{tabs.map(tripTypeRenderer)}
				</div>
				<HotelTypePart/>
			</div>
		</div>
	)
}

const FormPart = memo(_FormPart)
export default FormPart