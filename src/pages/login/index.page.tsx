import { useState, useReducer } from 'react'

import HeadingComponent from "@/components/heading"

import Styles from './style.module.css'

class ElementData {
	public showPassword: boolean = false
}

export default function LoginPage(): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	function togglePassword(): void {
		d.showPassword = !d.showPassword
		forceUpdate()
	}

	return (<>
		<HeadingComponent title="Login"/>
		<div className="w-[100vw] h-[100vh] relative">
			<div className="bg-[rgba(0,0,0,.15)] w-1/2 h-[100vh] absolute right-0 flex items-center justify-center">
				<div className="bg-[#FFFFFF] p-4 rounded-md max-w-[480px] w-full">
					<h4 className="mb-8 select-none">Login to your account</h4>
					<form className="flex flex-col">
						<div className="flex flex-col gap-4">
							<div className={Styles['form-input']}>
								<input type="email" id="user-email" name="email" placeholder="Email" className="bg-gray-200 text-[14px]"/>
								<label htmlFor="user-email" className="text-[14px]">Email/Username</label>
							</div>
							<div className={Styles['form-input']}>
								<input type={d.showPassword ? 'text' : 'password'} id="user-password" name="password" placeholder="Password" className="bg-gray-200 text-[14px]"/>
								<label htmlFor="user-password" className="text-[14px]">Password</label>
								<button type="button" onClick={togglePassword} className={Styles['btn-toggle']}>
									<i className={`uil uil-${d.showPassword ? 'eye' : 'eye-slash'} leading-none`}/>
								</button>
							</div>
						</div>
						<div className="flex justify-end">
							<p className="tex-right text-[12px] cursor-pointer">Forgot password?</p>
						</div>
						<div className="mt-4">
							<button type="submit" className="w-full bg-green-600 text-white rounded-[4px] py-1 hover:opacity-80">
								Login
							</button>
						</div>
					</form>
					<div className="flex justify-center items-center">
						<span>Don&apos;t have an account? <a className="underline">Register here</a></span>
					</div>
				</div>
			</div>
		</div>
	</>)
}