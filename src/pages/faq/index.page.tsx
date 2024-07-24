import { useState, useReducer, useRef, useEffect } from 'react'
import HeaderComponent, {
	PropsInterface as HeaderComponentPropsInterface
} from '@/components/header'
import HeadingComponent from '@/components/heading'
import FooterComponent, {
	PropsInterface as FooterComponentPropsInterface
} from '@/components/footer'
import CollapsibleComponent from '@/components/collapsible'

import Styles from './style.module.css'
import { exec, sleep } from '@/@utils/common'

class ElementData {
	public activeIndex: number | undefined = undefined
	public isInit: boolean
	public footerHeight: number = 0
}

export default function FaqPage(): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)
	const ref: React.MutableRefObject<{footerHeight: number}> = useRef({ footerHeight: 0 })

	const header: HeaderComponentPropsInterface['headerList'] = [{
		title: 'Pages',
		children: [
			{ title: 'Landing', href: './' },
			{ title: 'Booking', href: 'booking' },
			{ title: 'Shop', href: 'shop' }
		]
	},
	{ title: 'About Us', href: './#aboutus' },
	{ title: 'Our Stands', href: './#believe' },
	{ title: 'Service', href: '/#service' }]

	const footer: FooterComponentPropsInterface['contents'] = [
		{ title: '', children: ['Blog', 'Career', 'About Us'] },
		{ title: '', children: ['Contact Us', 'Policy', 'Faq'] }
	]

	useEffect(() => {
		exec(async () => {
			await sleep(.1)
			if (d.isInit) return

			
			ref.current.footerHeight = document.getElementById('footer')?.clientHeight || 0
			d.isInit = true
			forceUpdate()
		})
	})

	function toggleCollapsible(index: number): void {
		if (d.activeIndex === index) d.activeIndex = undefined
		else d.activeIndex = index
		forceUpdate()
	}

	return (<>
	<HeadingComponent title="FAQ"/>
	<div className={Styles['faq-page']} style={{minHeight: `calc(100vh - ${ref.current.footerHeight}px)`}}>
		<HeaderComponent headerList={header}/>
		<div className="my-8 max-w-[1200px] mx-auto">
			<section className="flex flex-col justify-center items-center">
				<h3>Frequently Asked Question</h3>
				<div className="mt-4 flex flex-col w-full p-2 gap-4">
					<CollapsibleComponent title="Where do I log in?" iconPosition="right" controlled onClick={(): void => toggleCollapsible(1)} isActive={d.activeIndex == 1}>
						<div className="flex p-4">
							<p>Frequently asked question children #1</p>
						</div>
					</CollapsibleComponent>
					<CollapsibleComponent title="How do I create a new account?" iconPosition="right" controlled onClick={(): void => toggleCollapsible(2)} isActive={d.activeIndex == 2}>
						<div className="flex p-4">
							<p>Frequently asked question children #2</p>
						</div>
					</CollapsibleComponent>
					<CollapsibleComponent title="When can I contact?" iconPosition="right" controlled onClick={(): void => toggleCollapsible(3)} isActive={d.activeIndex == 3}>
						<div className="flex p-4">
							<p>Frequently asked question children #3</p>
						</div>
					</CollapsibleComponent>
					<CollapsibleComponent title="What are the benefits?" iconPosition="right" controlled onClick={(): void => toggleCollapsible(4)} isActive={d.activeIndex == 4}>
						<div className="flex p-4">
							<p>Frequently asked question children #4</p>
						</div>
					</CollapsibleComponent>
				</div>
			</section>
		</div>
	</div>
	<FooterComponent contents={footer} company="Porto"/>
	</>)
}