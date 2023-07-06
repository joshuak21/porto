import React from 'react'

import FooterComponent, {
	PropsInterface as FooterComponentPropsInterface
} from '@/components/footer'
import HeaderComponent, {
	PropsInterface as HeaderComponentPropsInterface,
} from '@/components/header'
import HeadingComponent from '@/components/heading'

import FormPart from './_form'

import Styles from './style.module.scss'

export default function BookingPage(): JSX.Element {

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
			// href: '/product-list'
		}]
	}, {
		title: 'Home',
		children: [{
			title: 'About Us',
			href: '#aboutus'
		}, {
			title: 'Partners'
		}]
	}, {
		title: 'Our Service',
		children: [{
			title: 'Online Booking',
		}, {
			title: 'Reschedule',
		}, {
			title: 'Refunds'
		}]
	}, {
		title: 'About Us'
	}, {
		title: 'Contact Us'
	}]

	const footerContents: FooterComponentPropsInterface['contents']= [{
		title: 'Resources',
		children: ['Docs', 'Learn', 'Showcase', 'Blog', 'Analytics', 'Previews']
	}, {
		title: 'Our Service',
		children: ['Online Booking', 'Reschedule', 'Refunds']
	}, {
		title: 'About Us',
		children: ['How It Works', 'Workflow', 'Our Team']
	}]

	return (<>
		<HeadingComponent title="Booking Page"/>
		<div className={Styles.BookingPage}>
			<HeaderComponent headerList={header}/>
			<div className={Styles.contentContainer}>
				<p className="text-[24px]">Booking Page</p>
				<p>Whereas disregard and contempt for human rights have resulted</p>
				<div className={Styles.fontWeightList}>
					<p className="font-thin">Montserrat Thin</p>
					<p className="font-extralight">Montserrat ExtraLight</p>
					<p className="font-light">Montserrat Light</p>
					<p className="font-regular">Montserrat Regular</p>
					<p className="font-medium">Montserrat Medium</p>
					<p className="font-semibold">Montserrat SemiBold</p>
					<p className="font-bold">Montserrat Bold</p>
					<p className="font-extrabold">Montserrat ExtraBold</p>
				</div>

				<FormPart/>
			</div>
			<FooterComponent contents={footerContents} company="Vercel"/>
		</div>
	</>)
}