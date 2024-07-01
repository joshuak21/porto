import { useState, useReducer } from 'react'
import { useRouter, NextRouter } from 'next/router'
import NextLink from 'next/link'
import HeadingComponent from '@/components/heading'
import { sleep } from '@/@utils/common'

import Styles from './style.module.css'

class ElementData {
	public isSubmitting: boolean = false
}

export default function ForgotPasswordPage(): JSX.Element {
	const [d] = useState(new ElementData())
	const router: NextRouter = useRouter()
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	async function submitForgot(ev: React.FormEvent): Promise<void> {
		ev.preventDefault()

		d.isSubmitting = true
		forceUpdate()
		await sleep(2)
		d.isSubmitting = false
		forceUpdate()
		await router.push('/reset-password')
	}

	return (<>
		<HeadingComponent title="Forgot Password"/>
		<div className="w-[100vw] h-[100vh] bg-sky-200 relative flex items-center justify-center">
			<div className="bg-white p-4 rounded-md w-full max-w-[480px] relative">
				<h4>Forgot Password</h4>
				<p>Please enter the email you use to sign in.</p>
				<form onSubmit={submitForgot} className="pt-8 pb-4">
					<div className={Styles['form-input']}>
						<input type="email" id="email" name="email" placeholder="Email" disabled={d.isSubmitting} className="text-[14px]"/>
						<label htmlFor="email" className="text-[14px]">Email</label>
					</div>
					<div className="pt-8">
						<button type="submit" disabled={d.isSubmitting} className="w-full bg-sky-400 text-white rounded-[4px] py-1 hover:opacity-80 flex flex-row items-center justify-center disabled:opacity-50">
							{d.isSubmitting ? <i className="uil uil-spinner-alt leading-none icon-loader text-[18px]"/> : <span>Reset Password</span>}
						</button>
					</div>
				</form>
				<div className="flex items-center justify-center">
					<NextLink href="/login" className="underline">Back to login</NextLink>
				</div>
			</div>
		</div>
	</>)
}