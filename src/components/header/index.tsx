import {
	memo,
	useEffect,
} from 'react'

import NextImage from 'next/image'

import Styles from './style.module.scss'

export type ChildrenType = {
	title: string,
	href?: string,
}

export interface PropsInterface {
	logo?: string,
	alt?: string,
	headerList: {
		title: string,
		children?: ChildrenType[]
	}[],
	className?: string,
	style?: React.CSSProperties,
}

function _HeaderComponent({
	logo = 'vercel.svg',
	alt = 'Header Logo',
	...props
}: PropsInterface): JSX.Element {

	useEffect(() => {
		document.addEventListener('click', (e) => {
			const target = (e.target as HTMLElement).closest('.headerContainer')?.querySelectorAll('div.headerContainer')
			if(!target) {
				const header: HTMLCollectionOf<Element> = document.getElementsByClassName('headerContainer')
				Array.from(header).forEach((h) => {
					h.classList.remove(Styles.show)
				})
			}
		})
		document.removeEventListener('click', () => {})
	}, [])

	const onToggle = (e: React.MouseEvent<HTMLDivElement>) => {
		//HIDE ALL HEADER DROPDOWN
		const headers = document.getElementsByClassName('headerContainer')
		Array.from(headers).forEach((h) => {
			h.classList.remove(Styles.show)
		})

		//SHOW CLICKED DROPDOWN
		const target = (e.target as HTMLElement).closest('.headerContainer')
		target?.classList.add(Styles.show)
	}

	const onClickHeaderChildren = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.stopPropagation()
		const headers = document.getElementsByClassName('headerContainer')
		Array.from(headers).forEach((h) => {
			h.classList.remove(Styles.show)
		})
	}

	const headerChildrenRenderer = (hC: ChildrenType, index: number) => {
		return (
			<div key={index}>
				<a onClick={onClickHeaderChildren} href={hC.href}>{hC.title}</a>
			</div>
		)
	}

	const headerRenderer = (header: typeof props.headerList[0], index: number) => {
		return (
			<div key={index} className={`${Styles.headerContainer} headerContainer`} onClick={onToggle}>
				<p>{header.title}</p>
				{!!header.children && (
					<div className={`${Styles.headerChildrenContainer} headerChildrenContainer`}>
						{header.children.map(headerChildrenRenderer)}
					</div>
				)}
			</div>
		)
	}

	return (
		<header className={`${Styles.headerNavContainer} ${props.className || ''}`} style={props.style}>
			<div className={Styles.headerDesktopContainer}>
				<div className={Styles.headerImage}>
					{logo ? (
						<NextImage src={logo} width={100} height={42} alt={alt}/>
					) : (
						<div className="flex justify-center items-center w-[150px] h-[64px]">
							<p>Your Logo here</p>
						</div>
					)}
				</div>
				<div className={Styles.headerListContainer}>
					{props.headerList.map(headerRenderer)}
				</div>
			</div>
		</header>
	)
}

const HeaderComponent = memo(_HeaderComponent)
export default HeaderComponent