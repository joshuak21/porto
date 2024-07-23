import { useEffect, useReducer } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'

import Styles from './style.module.css'

import Logo from 'public/img/vercel.svg'

export default function HeaderShopComponent(): JSX.Element {
	return (
		<header className={Styles['header-shop-container']}>
			<div className="flex flex-row items-center">
				<NextImage src={Logo} alt="" className="w-[100px] h-[42px]"/>

				<div className={Styles['header-search-container']}>
					<input type="text" id="header-search" name="header-search" placeholder="Search products"/>
					<i className="uil uil-search leading-none text-[1.25em] absolute left-[12px]"/>
				</div>

				<div className="flex ml-[3em] items-center">
					<button type="button" className="flex">
						<i className="uil uil-shopping-cart-alt leading-none text-[1.25em]"/>
					</button>
				</div>

				<div className="ml-[3em] h-[1.25em] w-[1px] bg-[#9C9DA2]"/>

				<div className="ml-[3em] flex flex-row items-center gap-3">
					<button type="button" className={Styles['btn-login']}>Login</button>
					<button type="button" className={Styles['btn-regis']}>Register</button>
				</div>
			</div>
		</header>
	)
}