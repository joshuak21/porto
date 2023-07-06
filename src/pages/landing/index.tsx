import React, {
	useEffect,
} from 'react'

import NextImage from 'next/image'

import FooterComponent, {
	PropsInterface as FooterComponentPropsInterface,
} from '@/components/footer'
import HeaderComponent, {
	PropsInterface as HeaderComponentPropsInterface,
} from '@/components/header'
import HeadingComponent from '@/components/heading'

import Styles from './style.module.scss'

import bannerImg from '../../../public/img/landing/unsplash-jefferson-sees.jpg'

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
	}]

	return (<>
		<HeadingComponent title="Landing Page"/>
		<div className={Styles.LandingPage}>
			<HeaderComponent headerList={header}/>
			<div className={Styles.contentContainer}>
				<section id="banner" className={Styles.bannerSection}>
					<div className={Styles.bannerSectionContainer}>
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section>

				<section id="aboutme" className={Styles.aboutSection}>
					<div className={Styles.aboutSectionContainer}>
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section>

				{/* <section id="banner" className={Styles.bannerSection}>
					<div className={Styles.bannerSectionContainer}>
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section> */}

				{/* <section id="banner" className={Styles.bannerSection}>
					<div className={Styles.bannerSectionContainer}>
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p>Ut pretium ligula at commodo pharetra. Proin porta nibh sit amet nibh suscipit, in pretium elit mollis. Sed varius, erat eu fermentum ornare, mi mi pretium felis, sed consectetur arcu eros eget sem. Duis sit amet feugiat ante, sed convallis felis.</p>
					</div>
				</section> */}
			</div>
		</div>
	</>)
}