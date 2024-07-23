import { useState } from 'react'
import NextImage, { StaticImageData } from 'next/image'
import CountdownTimer from '@/components/countdown'

import SwiperCore, { Pagination, FreeMode, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination, FreeMode, Autoplay])
import 'swiper/css'

import moment from 'moment'

// import * as StringHelper from '@/@utils/string'

import Styles from './style.module.css'

import BannerAC6 from '../../../../public/img/shop/banner/AC_6.jpg'
import BannerLandscape from '../../../../public/img/landing/unsplash-jefferson-sees.jpg'
import Burger from '../../../../public/img/shop/product/burger.jpg'

import Promo1 from 'public/img/shop/banner/banner_tokped_1.jpg'
import Promo2 from 'public/img/shop/banner/banner_tokped_2.jpg'
import Promo3 from 'public/img/shop/banner/banner_tokped_3.jpg'
import Promo4 from 'public/img/shop/banner/banner_tokped_4.jpg'

import { formatPrice } from '@/@utils/common'

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
		}],
		products = [
			{ price: 35000, discountedPrice: 28000 },
			{ price: 27000, discountedPrice: 23000 },
			{ price: 45000, discountedPrice: 41000 },
			{ price: 25000, discountedPrice: 25000 }
		],
		promoBanner: StaticImageData[] = [Promo1, Promo2, Promo3, Promo4]

	const timerIsDone = (): void => {
		console.log('TIMER IS DONE')
		setIsOver(true)
	}
	
	return (
		<div className={Styles['LandingPage']}>
			{/* <div className={Styles.BannerSection}>
				<h2 className={Styles.title}>Great Deals</h2>
				<Swiper spaceBetween={50} modules={[Autoplay]} pagination={{clickable: false}} autoplay loop>
					{banner.map((b: BannerInterface, index: number) => (
						<SwiperSlide key={index}>
							<BannerRenderer banner={b}/>
						</SwiperSlide>
					))}
				</Swiper>
			</div> */}

			<div className={Styles['shop-header']}>
				<p>HEADER WITH SEARCHBAR</p>
			</div>

			<div className={Styles['content-container']}>
				<div>
					<Swiper spaceBetween={50} modules={[Autoplay]} autoplay={{delay: 3000, disableOnInteraction: false}} loop className="rounded-md">
						{promoBanner.map((p, idx) => (
							<SwiperSlide key={idx}>
								<NextImage src={p} alt="" className="w-full"/>
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

				<div className="grid grid-cols-4 gap-4 mx-8 mb-12">
					{products.map((data, index: number) => (
						<div key={index} className={Styles['card-product-container']}>
							<div className={Styles['card-product']}>
								<NextImage src={Burger} alt="Product Thumbnail" className="rounded-sm object-contain"/>
								<div className="flex flex-col mt-2 h-full justify-between">
									<div className="flex flex-col">
										<p className="text-[18px] font-medium">Deluxe Burger</p>
										{data.discountedPrice !== data.price ? (<>
											<p className="line-through text-[12px]">{formatPrice(data.price)}</p>
											<p className="font-medium text-[#FF0000]">{formatPrice(data.discountedPrice)}</p>
										</>) : (
											<p>{formatPrice(data.price)}</p>
										)}
									</div>

									<div className="mt-2 flex justify-end">
										<button type="button" className="bg-[#000000] py-1 px-4 rounded-md text-white duration-300 ease hover:opacity-80">Buy Now</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
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