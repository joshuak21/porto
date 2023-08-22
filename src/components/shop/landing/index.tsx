import { useState } from 'react'
import NextImage, { StaticImageData } from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import moment from 'moment'

// import * as StringHelper from '@/@utils/string'

import Styles from './style.module.css'

import BannerAC6 from '../../../../public/img/shop/banner/AC_6.jpg'
import BannerLandscape from '../../../../public/img/landing/unsplash-jefferson-sees.jpg'
import CountdownTimer from '@/components/countdown'

interface BannerInterface {
	image: StaticImageData,
	title: string,
	price: number,
}

interface ForYou {
	image: StaticImageData,
	title: string,
	price: number,
	discountedPrice: number,
}

export default function LandingComponent(): JSX.Element {
	const
		[isOver, setIsOver] = useState<boolean>(false),
		timestamp: number = 1692693165000, // August 31st
		testTimestamp = moment(new Date()).add('2', 'days').valueOf(),
		banner: BannerInterface[] = [{
			image: BannerLandscape,
			title: 'Landscape Simulator',
			price: 399000,
		}, {
			image: BannerAC6,
			title: 'Armoured Core VI - Fires of Rubicon',
			price: 599000,
		}]
		// forYou: ForYou[] = [{
		// 	image: BannerLandscape,
		// 	title: 'Game #1',
		// 	price: 
		// }]

	const timerIsDone = (): void => {
		console.log('TIMER IS DONE')
		setIsOver(true)
	}
	
	return (<>
		<div className={Styles.BannerSection}>
			<h2 className={Styles.title}>Great Deals</h2>
			<Swiper spaceBetween={50} modules={[Autoplay]} pagination={{clickable: false}} autoplay loop>
				{banner.map((b: BannerInterface, index: number) => (
					<SwiperSlide key={index}>
						<BannerRenderer banner={b}/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>

		{!isOver && (
			<div className={Styles.BannerSection}>
				<div className={Styles.countdownContainer}>
					<h5 className="pr-4">Curated for You</h5>
					<CountdownTimer targetDate={testTimestamp} isOver={timerIsDone}/>
				</div>
			</div>
		)}
	</>)
}

function BannerRenderer(data: {banner: BannerInterface}): JSX.Element {

	const currencyFormatter = (price: number) => {
		return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price)
	}

	return (
		<div className={Styles.bannerContainer}>
			<div className={Styles.bannerImageContainer}>
				<div className={Styles.bannerImageInnerContainer}>
					<NextImage src={data.banner.image} alt="Armored Core VI"/>
					{/* <NextImage src={BannerAC6} alt="Armored Core VI"/> */}
				</div>
				<div className={Styles.bannerTitleContainer}>
					<h5>{data.banner.title}</h5>
					<p>{currencyFormatter(data.banner.price)}</p>
				</div>
			</div>
		</div>
	)
}