import { memo } from 'react'
import NextImage from 'next/image'

import moment from 'moment'

import Styles from './style.module.scss'

export interface PropsInterface {
	logo?: string,
	alt?: string,
	contents: {
		title: string,
		children?: string[],
	}[],
	company: string,
	className?: string,
	style?: React.CSSProperties,
}

function _FooterComponent({
	logo = 'vercel.svg',
	alt = 'Footer Logo',
	...props
}: PropsInterface): JSX.Element {
	const onSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		alert('SUBSCRIBED')
	}

	const childrenContainer = (content: string, index: number) => {
		return (
			<div key={index} className={Styles.childrenContainer}>
				<a href="" className="text-[12px]">{content}</a>
			</div>
		)
	}

	const contentRenderer = (content: typeof props.contents[0], index: number) => {
		return (
			<div key={index} className={Styles.contentContainer}>
				<p className="text-[14px] pb-[12px]">{content.title}</p>
				{!!content.children && (
					<div className={Styles.contentChildrenContainer}>
						{content.children.map(childrenContainer)}
					</div>
				)}
			</div>
		)
	}

	return (
		<div className={`${Styles.footerWrapper} ${props.className || ''}`} style={props.style}>
			<footer className={Styles.footerContainer}>
				<div className={Styles.footerInnerContainer}>
					<div className={Styles.footerImageContainer}>
						<NextImage src={logo} alt={alt} width={88} height={20}/>
					</div>
					{props.contents.map(contentRenderer)}
					<div className={Styles.subscribeContainer}>
						<p className="text-[14px] pb-[12px]">Subscribe to our newsletter</p>
						<p className="text-[12px] text-[#000000bf]">Stay updated with our latest news.</p>
						<form onSubmit={onSubscribe} className={Styles.formContainer}>
							<input type="email" placeholder="mail@mail.com" required/>
							<button type="submit">Subscribe</button>
						</form>
					</div>
				</div>
				<div className={Styles.copyrightContainer}>
					<p>© {moment().year()} {props.company}</p>
				</div>
			</footer>
		</div>
	)
}

const FooterComponent = memo(_FooterComponent)
export default FooterComponent