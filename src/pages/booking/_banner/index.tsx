import NextImage, { StaticImageData } from 'next/image'

import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination, Autoplay])
import 'swiper/css'

import Banner1 from 'public/img/booking/banner/banner_tokped_1.jpg'
import Banner2 from 'public/img/booking/banner/banner_tokped_2.jpg'
import Banner3 from 'public/img/booking/banner/banner_tokped_3.jpg'
import Banner4 from 'public/img/booking/banner/banner_tokped_4.jpg'

export default function BannerPart(): JSX.Element {
	const banners: StaticImageData[] = [Banner1, Banner2, Banner3, Banner4]

	return (
		<section id="banner-section" className="py-8">
			<div className="w-full max-w-[1600px] mx-auto px-4">
				<Swiper slidesPerView={1} spaceBetween={36} modules={[Autoplay]} pagination={{clickable: true}} autoplay loop className="w-full">
					{banners.map((ban: StaticImageData, index: number) => (
						<SwiperSlide key={index}>
							<NextImage src={ban} alt="" className="w-full"/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}