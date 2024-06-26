import { useState, useReducer } from 'react'

import HeadingComponent from "@/components/heading"

import Styles from './style.module.css'
import { sleep } from '@/@utils/common'

class ElementData {
	public showPassword: boolean = false
	public isSubmitting: boolean = false
}

export default function LoginPage(): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	function togglePassword(): void {
		d.showPassword = !d.showPassword
		forceUpdate()
	}

	async function doLogin(ev: React.FormEvent): Promise<void> {
		ev.preventDefault()

		d.isSubmitting = true
		forceUpdate()
		await sleep(3)
		d.isSubmitting = false
		forceUpdate()
	}

	return (<>
		<HeadingComponent title="Login"/>
		<div className="w-[100vw] h-[100vh] relative bg-sky-200">
			<div className="bg-[rgba(0,0,0,.15)] lg:w-1/2 md:w-[60%] w-full h-[100vh] duration-300 ease-in-out absolute right-0 flex items-center justify-center px-4">
				<div className="bg-[#FFFFFF] p-4 rounded-md max-w-[480px] w-full">
					<h4 className="mb-8 select-none">Login to your account</h4>
					<form className="flex flex-col" onSubmit={doLogin}>
						<div className="flex flex-col gap-4">
							<div className={Styles['form-input']}>
								<input type="email" id="user-email" name="email" placeholder="Email" disabled={d.isSubmitting} className="bg-gray-200 text-[14px]"/>
								<label htmlFor="user-email" className="text-[14px]">Email/Username</label>
							</div>
							<div className={Styles['form-input']}>
								<input type={d.showPassword ? 'text' : 'password'} id="user-password" name="password" placeholder="Password" disabled={d.isSubmitting} className="bg-gray-200 text-[14px]"/>
								<label htmlFor="user-password" className="text-[14px]">Password</label>
								<button type="button" onClick={togglePassword} disabled={d.isSubmitting} className={Styles['btn-toggle']}>
									<i className={`uil uil-${d.showPassword ? 'eye' : 'eye-slash'} leading-none`}/>
								</button>
							</div>
						</div>
						<div className="flex justify-end">
							<p className="tex-right text-[12px] cursor-pointer">Forgot password?</p>
						</div>
						<div className="mt-4">
							<button type="submit" disabled={d.isSubmitting} className="w-full bg-sky-400 text-white rounded-[4px] py-1 hover:opacity-80 flex flex-row items-center justify-center disabled:opacity-50">
								{d.isSubmitting ? (<i className="uil uil-spinner-alt leading-none ml-2 icon-loader text-[18px]"/>) : <span>Login</span>}
							</button>
						</div>
					</form>
					<div className="flex justify-center items-center mt-4">
						<span>Don&apos;t have an account? <a className="underline">Register here</a></span>
					</div>
				</div>
			</div>
		</div>
	</>)
}