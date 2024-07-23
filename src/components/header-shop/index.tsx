import { useEffect, useReducer } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'

import Styles from './style.module.css'

import Logo from 'public/img/vercel.svg'

export default function HeaderShopComponent(): JSX.Element {
	return (
		<header className={Styles['header-shop-container']}>
			<div className={Styles['header-desktop']}>
				<NextImage src={Logo} alt="" className="w-[100px] h-[42px]"/>
			</div>
		</header>
	)
}