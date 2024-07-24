import { useState, useReducer } from 'react'
import NextImage, { StaticImageData } from 'next/image'

import { formatPrice } from '@/@utils/common'

import VariantSelectorComponent from '../variant-selector'
import Styles from './style.module.css'

import SwiperCore, { Pagination, FreeMode } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
SwiperCore.use([Pagination])
import 'swiper/css'
import moment from 'moment'

import Burger1 from 'public/img/shop/product/burger.jpg'
import Burger2 from 'public/img/shop/product/burger_2.jpg'
import Burger3 from 'public/img/shop/product/burger_3.jpg'
import Burger4 from 'public/img/shop/product/burger_4.jpg'
import CollapsibleComponent from '@/components/collapsible'

class ElementData {
	public selectedIndex: number = 0
	public selectedVariant: string = ''
}

export default function ShopDetailComponent(): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)
	const [swiper, setSwiper] = useState<SwiperCore | null>(null)
	const productImages: StaticImageData[] = [Burger1, Burger2, Burger3, Burger4, Burger1, Burger2, Burger3, Burger4]
	const review: number[] = [8,10,5,0,0]

	function calculateDiscount() {
		return (((79000 - 59000) / 79000) * 100).toFixed(0)
	}

	function changeImage(index: number) {
		d.selectedIndex = index
		swiper?.slideTo(index)
		forceUpdate()
	}

	function onChangeVariant(variant: string) {
		d.selectedVariant = variant
		forceUpdate()
	}

	function getPercentageReview(total: number) {
		const reviews = review.reduce((acc, cur) => acc + cur, 0)
		return (total / reviews * 100).toFixed(2)
	}

	return (
		<div>
			<div className="max-w-[1232px] mx-auto flex flex-row flex-wrap px-4 py-8 relative">
				<div className="flex flex-col w-[60%] pr-2">
					<div className="flex flex-col">
						<h2 className="text-[24px] mr-1">Product Name</h2>
						<p className="text-[14px]">Brand Name</p>
					</div>

					<div className="mt-4">
						<span className="font-bold text-[18px]">{formatPrice(49000)} <span className="text-[12px] text-red-500">{calculateDiscount()}%</span></span>
						<p className="text-[14px] line-through opacity-[.5] leading-none">{formatPrice(79000)}</p>
					</div>

					<div className="mt-4">
						<VariantSelectorComponent variants={['With Cheese', 'Double Cheese', 'Double Meat']} onChangeVariant={onChangeVariant} defaultVariant="With Cheese"/>
					</div>

					<div className="mt-4 border-b border-[rgba(0,0,0,.2)]"/>

					<CollapsibleComponent title="Description" titleClassName="text-[14px] font-medium" className="mx-[-.5em]">
						<div className="px-2">
							<p className="text-[12px] whitespace-break-spaces">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque urna, fermentum ultricies sapien volutpat cursus. Donec ultricies, purus nec auctor blandit, nisi neque semper nulla, quis efficitur nisl mi nec diam. Nam tellus ante, dignissim a eros a, rhoncus faucibus ex. Donec tincidunt pharetra sem, nec elementum nisi pretium sed. Vivamus tempor, nisi in maximus hendrerit, sem ipsum fermentum tellus, sed porta urna enim at lorem. Quisque ac nisl at dui porta feugiat ac eu lectus. Fusce accumsan id nibh id imperdiet. Nunc sed est tincidunt, tempor ex eget, suscipit metus. Vivamus felis nisl, congue ut pretium quis, placerat ut justo.{`\n\n`}Quisque semper euismod facilisis. Donec posuere enim eu scelerisque sollicitudin. Nullam rhoncus id arcu ac tempus. Donec augue ante, malesuada ac imperdiet non, commodo eget tellus. Curabitur congue augue maximus nulla ultricies finibus. Nulla quis gravida ante. Nunc pulvinar elit arcu, nec vestibulum sapien placerat sit amet. Cras interdum a libero eget tincidunt. Ut commodo ligula vitae ante congue vehicula.</p>
							<p className="text-[12px] whitespace-break-spaces pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque urna, fermentum ultricies sapien volutpat cursus. Donec ultricies, purus nec auctor blandit, nisi neque semper nulla, quis efficitur nisl mi nec diam. Nam tellus ante, dignissim a eros a, rhoncus faucibus ex. Donec tincidunt pharetra sem, nec elementum nisi pretium sed. Vivamus tempor, nisi in maximus hendrerit, sem ipsum fermentum tellus, sed porta urna enim at lorem. Quisque ac nisl at dui porta feugiat ac eu lectus. Fusce accumsan id nibh id imperdiet. Nunc sed est tincidunt, tempor ex eget, suscipit metus. Vivamus felis nisl, congue ut pretium quis, placerat ut justo.{`\n\n`}Quisque semper euismod facilisis. Donec posuere enim eu scelerisque sollicitudin. Nullam rhoncus id arcu ac tempus. Donec augue ante, malesuada ac imperdiet non, commodo eget tellus. Curabitur congue augue maximus nulla ultricies finibus. Nulla quis gravida ante. Nunc pulvinar elit arcu, nec vestibulum sapien placerat sit amet. Cras interdum a libero eget tincidunt. Ut commodo ligula vitae ante congue vehicula.</p>
							<p className="text-[12px] whitespace-break-spaces pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque urna, fermentum ultricies sapien volutpat cursus. Donec ultricies, purus nec auctor blandit, nisi neque semper nulla, quis efficitur nisl mi nec diam. Nam tellus ante, dignissim a eros a, rhoncus faucibus ex. Donec tincidunt pharetra sem, nec elementum nisi pretium sed. Vivamus tempor, nisi in maximus hendrerit, sem ipsum fermentum tellus, sed porta urna enim at lorem. Quisque ac nisl at dui porta feugiat ac eu lectus. Fusce accumsan id nibh id imperdiet. Nunc sed est tincidunt, tempor ex eget, suscipit metus. Vivamus felis nisl, congue ut pretium quis, placerat ut justo.{`\n\n`}Quisque semper euismod facilisis. Donec posuere enim eu scelerisque sollicitudin. Nullam rhoncus id arcu ac tempus. Donec augue ante, malesuada ac imperdiet non, commodo eget tellus. Curabitur congue augue maximus nulla ultricies finibus. Nulla quis gravida ante. Nunc pulvinar elit arcu, nec vestibulum sapien placerat sit amet. Cras interdum a libero eget tincidunt. Ut commodo ligula vitae ante congue vehicula.</p>
						</div>
					</CollapsibleComponent>
					{/* <div>
						<p className="text-[14px] font-medium">Description</p>
						<p className="text-[12px] whitespace-break-spaces">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque urna, fermentum ultricies sapien volutpat cursus. Donec ultricies, purus nec auctor blandit, nisi neque semper nulla, quis efficitur nisl mi nec diam. Nam tellus ante, dignissim a eros a, rhoncus faucibus ex. Donec tincidunt pharetra sem, nec elementum nisi pretium sed. Vivamus tempor, nisi in maximus hendrerit, sem ipsum fermentum tellus, sed porta urna enim at lorem. Quisque ac nisl at dui porta feugiat ac eu lectus. Fusce accumsan id nibh id imperdiet. Nunc sed est tincidunt, tempor ex eget, suscipit metus. Vivamus felis nisl, congue ut pretium quis, placerat ut justo.{`\n\n`}Quisque semper euismod facilisis. Donec posuere enim eu scelerisque sollicitudin. Nullam rhoncus id arcu ac tempus. Donec augue ante, malesuada ac imperdiet non, commodo eget tellus. Curabitur congue augue maximus nulla ultricies finibus. Nulla quis gravida ante. Nunc pulvinar elit arcu, nec vestibulum sapien placerat sit amet. Cras interdum a libero eget tincidunt. Ut commodo ligula vitae ante congue vehicula.</p>
						<p className="text-[12px] whitespace-break-spaces pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque urna, fermentum ultricies sapien volutpat cursus. Donec ultricies, purus nec auctor blandit, nisi neque semper nulla, quis efficitur nisl mi nec diam. Nam tellus ante, dignissim a eros a, rhoncus faucibus ex. Donec tincidunt pharetra sem, nec elementum nisi pretium sed. Vivamus tempor, nisi in maximus hendrerit, sem ipsum fermentum tellus, sed porta urna enim at lorem. Quisque ac nisl at dui porta feugiat ac eu lectus. Fusce accumsan id nibh id imperdiet. Nunc sed est tincidunt, tempor ex eget, suscipit metus. Vivamus felis nisl, congue ut pretium quis, placerat ut justo.{`\n\n`}Quisque semper euismod facilisis. Donec posuere enim eu scelerisque sollicitudin. Nullam rhoncus id arcu ac tempus. Donec augue ante, malesuada ac imperdiet non, commodo eget tellus. Curabitur congue augue maximus nulla ultricies finibus. Nulla quis gravida ante. Nunc pulvinar elit arcu, nec vestibulum sapien placerat sit amet. Cras interdum a libero eget tincidunt. Ut commodo ligula vitae ante congue vehicula.</p>
						<p className="text-[12px] whitespace-break-spaces pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque urna, fermentum ultricies sapien volutpat cursus. Donec ultricies, purus nec auctor blandit, nisi neque semper nulla, quis efficitur nisl mi nec diam. Nam tellus ante, dignissim a eros a, rhoncus faucibus ex. Donec tincidunt pharetra sem, nec elementum nisi pretium sed. Vivamus tempor, nisi in maximus hendrerit, sem ipsum fermentum tellus, sed porta urna enim at lorem. Quisque ac nisl at dui porta feugiat ac eu lectus. Fusce accumsan id nibh id imperdiet. Nunc sed est tincidunt, tempor ex eget, suscipit metus. Vivamus felis nisl, congue ut pretium quis, placerat ut justo.{`\n\n`}Quisque semper euismod facilisis. Donec posuere enim eu scelerisque sollicitudin. Nullam rhoncus id arcu ac tempus. Donec augue ante, malesuada ac imperdiet non, commodo eget tellus. Curabitur congue augue maximus nulla ultricies finibus. Nulla quis gravida ante. Nunc pulvinar elit arcu, nec vestibulum sapien placerat sit amet. Cras interdum a libero eget tincidunt. Ut commodo ligula vitae ante congue vehicula.</p>
					</div> */}

					<div className=" mb-4 border-b border-[rgba(0,0,0,.2)]"/>

					<div>
						<p className="text-[14px] font-medium">Review</p>
						<div className="flex flex-col w-full gap-2 max-w-[300px]">
							{review.map((rev: number, index: number) => (
								<div key={index} className="flex flex-row items-center">
									<p className="text-[12px]">⭐ {5 - index}</p>
									<div className="relative flex-1 h-[2px] bg-[#E6E6E6] mx-2">
										<div className="absolute h-[2px] top-0 left-0 bg-[#00BA61]" style={{width: `${getPercentageReview(rev)}%`}}/>
									</div>
									<p className="text-[12px] w-[25px] text-right">{rev}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col max-w-[40%] pl-2">
					<div className="w-full">
						<Swiper loop onSwiper={setSwiper}>
							{productImages.map((i, idx) => (
								<SwiperSlide key={idx}>
									<NextImage src={i} alt="" className="w-full h-full object-cover aspect-square"/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					<div className="flex w-full h-[5em] mt-4">
						<Swiper loop slidesPerView={4}>
							{productImages.map((data: StaticImageData, index: number) => (
								<SwiperSlide key={index}>
									<div className={`relative h-full cursor-pointer ${d.selectedIndex === index ? Styles['selected'] : ''}`} onClick={(): void => changeImage(index)}>
										<NextImage src={data} alt="" className="w-full h-full object-cover"/>
										<div className="absolute bottom-[6px] right-[6px] p-[4px] bg-[rgba(0,0,0,.3)]">
											<p className="text-[10px] font-bold text-white leading-none">{index+1}</p>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				<div className="sticky bottom-[0] w-full p-4 bg-[#FFFFFF] border-t border-[rgba(0,0,0,.3)] mb-[-2em] mt-4 flex justify-end">
					<button type="button" className="text-[14px] px-4 py-2 bg-[#00BA61] rounded-md text-white font-medium">Add to cart</button>
				</div>
			</div>
		</div>
	)
}