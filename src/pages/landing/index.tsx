import React, {
	useEffect,
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

import Styles from './style.module.scss'

import bannerImg from 'public/img/landing/unsplash-jefferson-sees.jpg'

import BBC from 'public/img/landing/clients/bbc.png'
import BOEING from 'public/img/landing/clients/boeing.png'
import CISCO from 'public/img/landing/clients/cisco.png'
import GITHUB from 'public/img/landing/clients/github.png'
import IBM from 'public/img/landing/clients/ibm.png'
import MICROSOFT from 'public/img/landing/clients/microsoft.png'

export default function LandingPage(): JSX.Element {

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

	return (<>
		<HeadingComponent title="Landing Page"/>
		<div className={Styles.LandingPage}>
			<HeaderComponent headerList={header}/>
			<div className={Styles.contentContainer}>
				<section id="banner" className="flex justify-center items-center relative">
					<div className="absolute top-0 left-0 w-full h-full">
						<NextImage src={bannerImg} alt="" className="w-full h-full object-cover blur-sm aspect-video"/>
					</div>
					<div className="w-full h-full max-w-[40em] px-4 py-[4em] self-center z-[2]">
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section>

				<section id="aboutme" className="max-w-[1600px] mx-auto py-4">
					<div className="flex flex-col items-start py-8">
						<h1 className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p className="max-w-[480px]">Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section>

				<section id="believe" className="max-w-[1600px] mx-auto py-4">
					<div className="flex flex-col items-end py-8">
						<h1 className="text-right">What Our Business Stands For</h1>
						<div className="max-w-[480px]">
							<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
						</div>
					</div>
				</section>

				<section id="service" className="max-w-[1600px] mx-auto py-4">
					<div className="flex flex-col items-center py-8">
						<h1 className="text-center">What We Offers</h1>
						<div className="flex flex-row gap-4">
							<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
							<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
						</div>
					</div>
				</section>

				<section id="clients" className="py-4">
					<div className="flex flex-col items-center py-8">
						<h1 className="text-center">Our Clients*</h1>
						<div className={`pt-4 max-w-[100%] ${Styles['marquee']}`}>
							<Marquee>
								{ clients.map((cl: typeof clients[0], index: number) => (
									<NextImage key={index} src={cl.image} alt={cl.title} className="h-[40px] w-auto object-fit mx-[5em]"/>
								))}
							</Marquee>
						</div>
					</div>
				</section>
			</div>
		</div>
		<FooterComponent contents={footer} company="Porto"/>
	</>)
}