import { useState, useReducer } from 'react'
import NextLink from 'next/link'

import HeadingComponent from '@/components/heading'
import { sleep } from '@/@utils/common'
import moment from 'moment'

import Styles from './style.module.css'

class ElementData {
	public passwordChecker: { showPassword: boolean, showConfirmPassword: boolean, confirmPasswordSame: boolean | undefined } = { showPassword: false, showConfirmPassword: false, confirmPasswordSame: undefined }
	public data: {
		email: string
		username: string
		password: string
		confirmPassword: string
	} = { email: '', username: '', password: '', confirmPassword: '' }
	public isSubmitting: boolean = false
}

export default function RegisterPage(): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	function onChange(e: never): void {
		const { name, value }: { name: string, value: string } = e[ 'target' ]
		d.data[name as keyof typeof d.data] = value
		forceUpdate()
	}

	function onChangePassword(e: never): void {
		const { name, value }: { name: string, value: string } = e[ 'target' ]
		d.data[name as keyof typeof d.data] = value
		forceUpdate()
		// if (name === 'confirmPassword') {

		// }
	}

	function togglePassword(type: 'showPassword' | 'showConfirmPassword'): void {
		d.passwordChecker[type] = !d.passwordChecker[type]
		forceUpdate()
	}

	async function doRegister(ev: React.FormEvent): Promise<void> {
		ev.preventDefault()

		d.isSubmitting = true
		forceUpdate()
		await sleep(3)
		d.isSubmitting = false
		forceUpdate()
	}

	return (<>
		<HeadingComponent title="Register"/>
		<div className="w-[100vw] h-[100vh] bg-sky-200 relative">
			<div className="bg-[rgba(0,0,0,.15)] lg:w-1/2 md:w-[60%] w-full h-[100vh] duration-300 ease-in-out absolute right-0 flex items-center justify-center px-4">
				<div className="bg-[#FFFFFF] p-4 rounded-md max-w-[480px] w-full">
					<h4 className="mb-8 select-none">Register</h4>
					<form className="flex flex-col" onSubmit={doRegister}>
						<div className="flex flex-col gap-4">
							<div className={Styles['form-input']}>
								<input type="email" id="email" name="email" placeholder="Email" onChange={onChange} disabled={d.isSubmitting} className="text-[14px]"/>
								<label htmlFor="email" className="text-[14px]">Email</label>
							</div>
							<div className={Styles['form-input']}>
								<input type="text" id="username" name="userName" placeholder="Email" onChange={onChange} disabled={d.isSubmitting} className="text-[14px]"/>
								<label htmlFor="username" className="text-[14px]">Username</label>
							</div>
							<div className={Styles['form-input']}>
								<input type={d.passwordChecker.showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" onChange={onChangePassword} disabled={d.isSubmitting} className="text-[14px]"/>
								<label htmlFor="password" className="text-[14px]">Password</label>
								<button type="button" onClick={(): void => togglePassword('showPassword')} className={Styles['btn-toggle']}>
									<i className={`uil uil-${d.passwordChecker.showPassword ? 'eye' : 'eye-slash'} leading-none`}/>
								</button>
							</div>
							<div className={Styles['form-input']}>
								<input type={d.passwordChecker.showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" placeholder="Password" onChange={onChangePassword} disabled={d.isSubmitting} className="text-[14px]"/>
								<label htmlFor="confirmPassword" className="text-[14px]">Confirm Password</label>
								<button type="button" onClick={(): void => togglePassword('showConfirmPassword')} className={Styles['btn-toggle']}>
									<i className={`uil uil-${d.passwordChecker.showConfirmPassword ? 'eye' : 'eye-slash'} leading-none`}/>
								</button>
							</div>
						</div>
						<div className="mt-4">
							<button type="submit" disabled={d.isSubmitting} className="w-full bg-sky-400 text-white rounded-[4px] py-1 hover:opacity-80 flex flex-row items-center justify-center disabled:opacity-50">
								{d.isSubmitting ? <i className="uil uil-spinner-alt leading-none icon-loader text-[18px]"/> : <span>Register</span>}
							</button>
						</div>
					</form>
					<div className="flex items-center justify-center mt-2">
						<span className="text-[14px]">Already have an account? <NextLink href="/login" className="underline font-[500]">Login here</NextLink></span>
					</div>
				</div>
				<div className="absolute bottom-[1em] left-50">
					<p className="text-[12px]">© {moment().year()}</p>
				</div>
			</div>
		</div>
	</>)
}