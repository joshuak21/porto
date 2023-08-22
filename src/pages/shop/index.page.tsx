import React from 'react'
import FooterComponent, {
	PropsInterface as FooterComponentPropsInterface
} from '@/components/footer'
import HeaderComponent, {
	PropsInterface as HeaderComponentPropsInterface
} from '@/components/header'
import HeadingComponent from '@/components/heading'
import LandingComponent from '@/components/shop/landing'

import Styles from './style.module.css'

export default function ShopLandingPage(): JSX.Element {

	const
		header: HeaderComponentPropsInterface['headerList'] = [{
			title: 'Shop',
			href: '/shop'
		}, {
			title: 'Signin',
			href: '/shop/signin'
		}, {
			title: 'Register',
			href: '/shop/register'
		}],
		footerContents: FooterComponentPropsInterface['contents'] = [{
			title: 'About Us',
			children: ['Our Story', 'Partners']
		}, {
			title: 'Our Service',
			children: ['30 days Money Guarantee', 'Reschedule', 'Refunds']
		}, {
			title: 'Payment Method',
			children: ['BCA', 'PERMATA', 'BNI', 'MANDIRI', 'BNI', 'VISA', 'MASTERCARD', 'OVO', 'QRIS' ]
		}, {
			title: 'Support',
			children: ["FAQ's", 'Terms of Service', 'Privacy Policy', 'Contact Us']
		}]

	return (<>
		<HeadingComponent title="Commerce Landing Page" />
		<HeaderComponent headerList={header} />
		<main>
			<LandingComponent/>
		</main>
		<FooterComponent contents={footerContents} company="E-Commerce"/>
	</>)
}