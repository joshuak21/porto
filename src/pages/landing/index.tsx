import React, {
	useEffect,
	useState,
	useReducer,
} from 'react'

import NextImage, { StaticImageData } from 'next/image'

import FooterComponent, {
	PropsInterface as FooterComponentPropsInterface,
} from '@/components/footer'
import HeaderComponent, {
	PropsInterface as HeaderComponentPropsInterface,
} from '@/components/header'
import HeadingComponent from '@/components/heading'

import Marquee from 'react-fast-marquee'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Pagination])

import Styles from './style.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'

import bannerImg from 'public/img/landing/unsplash-jefferson-sees.jpg'

import BBC from 'public/img/landing/clients/bbc.png'
import BOEING from 'public/img/landing/clients/boeing.png'
import CISCO from 'public/img/landing/clients/cisco.png'
import GITHUB from 'public/img/landing/clients/github.png'
import IBM from 'public/img/landing/clients/ibm.png'
import MICROSOFT from 'public/img/landing/clients/microsoft.png'

class ElementData {
	public selectedTestimony: { name: string, message: string } = { name: '', message: '' }
	public showModalTestimony: boolean = false
}

export default function LandingPage(): JSX.Element {

	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)
	const header: HeaderComponentPropsInterface['headerList'] = [{
		title: 'Pages',
		children: [{
			title: 'Landing',
			href: './'
		}, {
			title: 'Booking',
			href: 'booking'
		}, {
			title: 'Shop',
		}]
	}, {
		title: 'About Me',
		href: '/#aboutme'
	}, {
		title: 'Our Stands',
		href: '/#believe'
	}, {
		title: 'Service',
		href: '/#service'
	}]

	const footer: FooterComponentPropsInterface['contents'] = [
		{
			title: '',
			children: ['Blog', 'Career', 'About us']
		},
		{
			title: '',
			children: ['Contact us', 'Policy', 'Faq']
		}
	]

	const clients: {title: string, image: StaticImageData}[] = [
		{ title: 'BBC', image: BBC },
		{ title: 'Boeing', image: BOEING },
		{ title: 'Cisco', image: CISCO },
		{ title: 'GitHub', image: GITHUB },
		{ title: 'IBM', image: IBM },
		{ title: 'Microsoft', image: MICROSOFT }
	]
	const dummyServices: string[] = [
		'Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.'
	]
	const testimonies: { name: string, message: string }[] = [
		{ name: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Dignissim convallis aenean et tortor. Congue quisque egestas diam in arcu. Non consectetur a erat nam at lectus urna duis. Nisl purus in mollis nunc sed. Felis bibendum ut tristique et. Vulputate odio ut enim blandit. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eget gravida cum sociis natoque. At auctor urna nunc id cursus metus aliquam eleifend mi. Ipsum dolor sit amet consectetur adipiscing elit.\nElit eget gravida cum sociis.'},
		{ name: 'Clara Croft', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Dignissim convallis aenean et tortor. Congue quisque egestas diam in arcu. Non consectetur a erat nam at lectus urna duis. Nisl purus in mollis nunc sed. Felis bibendum ut tristique et. Vulputate odio ut enim blandit.' },
		{ name: 'James Vowel', message: 'Elit eget gravida cum sociis. Vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis a condimentum vitae sapien pellentesque habitant. Pellentesque id nibh tortor id aliquet. Placerat in egestas erat imperdiet sed euismod nisi.' },
		{ name: 'Kevin Peirce', message: 'At erat pellentesque adipiscing commodo elit at imperdiet. Etiam sit amet nisl purus in mollis nunc sed id. Egestas erat imperdiet sed euismod nisi. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Sed cras ornare arcu dui vivamus arcu.' },
		{ name: 'Allison Wayne', message: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Erat imperdiet sed euismod nisi porta lorem. Dui vivamus arcu felis bibendum ut tristique.\n\nPretium quam vulputate dignissim suspendisse. Volutpat blandit aliquam etiam erat. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Eget velit aliquet sagittis id consectetur purus ut. Posuere sollicitudin aliquam ultrices sagittis.' },
		{ name: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Dignissim convallis aenean et tortor. Congue quisque egestas diam in arcu. Non consectetur a erat nam at lectus urna duis. Nisl purus in mollis nunc sed. Felis bibendum ut tristique et. Vulputate odio ut enim blandit. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eget gravida cum sociis natoque. At auctor urna nunc id cursus metus aliquam eleifend mi. Ipsum dolor sit amet consectetur adipiscing elit.\nElit eget gravida cum sociis. Vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis a condimentum vitae sapien pellentesque habitant. Pellentesque id nibh tortor id aliquet. Placerat in egestas erat imperdiet sed euismod nisi. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.'},
		{ name: 'Clara Croft', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Dignissim convallis aenean et tortor. Congue quisque egestas diam in arcu. Non consectetur a erat nam at lectus urna duis. Nisl purus in mollis nunc sed. Felis bibendum ut tristique et. Vulputate odio ut enim blandit.' },
		{ name: 'James Vowel', message: 'Elit eget gravida cum sociis. Vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis a condimentum vitae sapien pellentesque habitant. Pellentesque id nibh tortor id aliquet. Placerat in egestas erat imperdiet sed euismod nisi.' },
	]

	function readTestimony(data: {name: string, message: string}): void {
		d.selectedTestimony = data
		d.showModalTestimony = true
		forceUpdate()
	}

	function closeModalTestimony(): void {
		d.selectedTestimony = { name: '', message: '' }
		d.showModalTestimony = false
		forceUpdate()
	}

	return (<>
		<HeadingComponent title="Landing Page"/>
		<div className={Styles.LandingPage}>
			<HeaderComponent headerList={header}/>
			<div>
				<section id="banner" className="flex justify-center items-center relative">
					<div className="absolute top-0 left-0 w-full h-full">
						<NextImage src={bannerImg} alt="" className="w-full h-full object-cover blur-sm"/>
					</div>
					<div className="w-full h-full max-w-[40em] px-4 py-[8em] self-center z-[2]">
						<h1 className="text-center text-[2em] font-bold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p className="text-white text-center hidden">Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section>

				<section id="aboutme" className="max-w-[1600px] mx-auto py-4">
					<div className="flex flex-col items-start px-4 py-8">
						<h1 className="text-left text-[2em] font-bold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p className="max-w-[480px]">Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section>

				<section id="believe" className="max-w-[1600px] mx-auto py-4">
					<div className="flex flex-col items-end px-4 py-8">
						<h1 className="text-right text-[2em] font-bold mb-4">What Our Business Stands For</h1>
						<div className="max-w-[480px]">
							<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
						</div>
					</div>
				</section>

				<section id="service" className="bg-white">
					<div className="flex flex-col items-center py-8 max-w-[1600px] mx-auto">
						<h1 className="text-center text-[2em] font-bold mb-4">What We Offers</h1>
						<div className="flex flex-col sm:flex-row gap-8">
							<div className="flex flex-col w-full sm:w-1/2">
								<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis.</p>
								<ul className="list-disc pl-7 my-4">
									<li>Lorem ipsum dolor sit amet</li>
									<li>Consectetur adipiscing elit</li>
									<li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
								</ul>
								<p>Condimentum id venenatis a condimentum vitae sapien pellentesque. Mauris sit amet massa vitae tortor. Phasellus egestas tellus rutrum tellus pellentesque eu.</p>
							</div>
							<div className="flex flex-col w-full sm:w-1/2">
								<p>Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
								<div className="flex flex-col gap-1">
									{dummyServices.map((data: string, index: number) => (
										<div key={index} className="flex flex-row gap-2 pl-7 justify-start items-start">
											<i className="uil uil-navigator leading-none pt-1"/>
											{/* <span className="flex">
											</span> */}
											<p>{data}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="clients" className="py-4 pt-[5em]">
					<div className="flex flex-col items-center py-8">
						<h1 className="text-center text-[2em] font-bold mb-4">Our Clients*</h1>
						<div className={`pt-4 max-w-[100%] ${Styles['marquee']}`}>
							<Marquee autoFill>
								{ clients.map((cl: typeof clients[0], index: number) => (
									<NextImage key={index} src={cl.image} alt={cl.title} className="h-[40px] w-auto object-fit px-[3em]"/>
								))}
							</Marquee>
						</div>
					</div>
				</section>

				<section id="testimonies" className="py-4 pt-[5em]">
					<div className="flex flex-col items-center py-8">
						<h1 className="text-[2em] font-bold mb-4">Testimonies</h1>
						<Swiper slidesPerView={2.25} className="w-full !px-4" spaceBetween={12} loop>
							{testimonies.map((data: typeof testimonies[0], index: number) => (
								<SwiperSlide key={index}>
									<div className="bg-white p-4 rounded-md">
										<div className="flex flex-row items-start">
											<span className="flex"><i className="uil uil-user-square leading-none text-[3em]"/></span>
											<p className="ml-2 font-medium text-lg">{data.name}</p>
										</div>
										<p className="pt-2 whitespace-break-spaces line-clamp-4">{data.message}</p>
										<div className="mt-2 flex w-full justify-end">
											<button type="button" onClick={(): void => readTestimony(data)} className="underline text-sm">Read more</button>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					<div className={`${Styles['modal-container']} ${d.showModalTestimony ? Styles['show'] : ''}`}>
						<div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.25)]"/>
						<div className="relative max-w-[600px] w-full bg-white rounded-md p-4">
							<div className="absolute top-[.5em] right-[.5em]">
								<button type="button" onClick={closeModalTestimony} className="flex overflow-hidden"><i className="uil uil-times leading-none text-[2em]"/></button>
							</div>
							<div className="flex flex-row items-start">
								<span className="flex"><i className="uil uil-user-square leading-none text-[3em]"/></span>
								<p className="ml-2 font-medium text-lg">{d.selectedTestimony.name}</p>
							</div>
							<div className="mt-4">
								<p className="whitespace-break-spaces">{d.selectedTestimony.message}</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
		<FooterComponent contents={footer} company="Porto"/>
	</>)
}