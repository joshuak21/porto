import {
	memo,
	useEffect,
	useState,
	useReducer,
} from 'react'

import NextLink from 'next/link'
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
		href?: string,
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

	const [state, setState] = useState<{showMobileHeader: boolean}>({showMobileHeader: false})

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

	const onToggle = (e: React.MouseEvent<HTMLDivElement>, header: typeof props.headerList[0]) => {
		//HIDE ALL HEADER DROPDOWN
		const headers = document.getElementsByClassName('headerContainer')
		Array.from(headers).forEach((h) => {
			h.classList.remove(Styles.show)
		})

		//SHOW CLICKED DROPDOWN
		const target = (e.target as HTMLElement).closest('.headerContainer')
		target?.classList.add(Styles.show)

		// Close header mobile if header have no children
		if (!header.children?.length) {
			setState({showMobileHeader: false})
		}
	}

	function toggleHeaderMobile(): void {
		setState({showMobileHeader: !state.showMobileHeader})
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
			<div key={index} className={`${Styles.headerContainer} headerContainer`} onClick={(e: React.MouseEvent<HTMLDivElement>): void => onToggle(e, header)}>
				<NextLink href={header.href ?? ''} scroll={false}>
					<p>{header.title}</p>
				</NextLink>
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
				<div className={Styles.headerCollapse}>
					<button type="button" className="flex" onClick={toggleHeaderMobile}>
						<i className="uil uil-bars leading-none text-xl"/>
					</button>
				</div>
			</div>
			<div className={`${Styles.headerMobileContainer} ${state.showMobileHeader ? Styles.showHeader : ''}`}>
				<div className="absolute top-[-54px] left-0 w-full h-[100vh] z-[2]" onClick={toggleHeaderMobile}/>
				<div className={Styles.headerMobileContentContainer}>
					<div className="flex flex-col gap-2">
						{props.headerList.map(headerRenderer)}
					</div>
				</div>
			</div>
		</header>
	)
}

const HeaderComponent = memo(_HeaderComponent)
export default HeaderComponent