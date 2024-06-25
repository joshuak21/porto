import React from 'react'

import FooterComponent, {
	PropsInterface as FooterComponentPropsInterface
} from '@/components/footer'
import HeaderComponent, {
	PropsInterface as HeaderComponentPropsInterface,
} from '@/components/header'
import HeadingComponent from '@/components/heading'

import FormPart from './_form'
import BannerPart from './_banner'

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
			href: 'shop'
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
				<FormPart/>
				<BannerPart/>
				<div>
					<p className="text-xl font-bold text-center">PPPP</p>
				</div>
			</div>
			<FooterComponent contents={footerContents} className="!bg-[#FFFFFF]" company="Vercel"/>
		</div>
	</>)
}