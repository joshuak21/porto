import { useState, useReducer } from 'react'

import HeadingComponent from '@/components/heading'
import { sleep } from '@/@utils/common'

import Styles from './style.module.css'

class ElementData {
	public isSubmitting: boolean = false
}

export default function ResetPasswordPage(): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	async function submitReset(ev: React.FormEvent): Promise<void> {
		ev.preventDefault()

		d.isSubmitting = true
		forceUpdate()
		await sleep(3)
		d.isSubmitting = false
		forceUpdate()
	}

	return (<>
		<HeadingComponent title="Reset Password"/>
		<div className="w-[100vw] h-[100vh] bg-sky-200 flex items-center justify-center p-4">
			<div className="bg-white p-4 rounded-md w-full max-w-[640px]">
				<h4>Reset Your Password</h4>
				<form onSubmit={submitReset} className="pt-8 pb-4">
					<div className="flex flex-col gap-4">
						<div className={Styles['form-input']}>
							<input type="password" id="new-password" name="new-password" placeholder="New Password" disabled={d.isSubmitting} className="text-[14px]"/>
							<label htmlFor="new-password" className="text-[14px]">New Password</label>
							<button type="button" disabled={d.isSubmitting} className={Styles['btn-toggle']}>
								<i className="uil uil-eye"/>
							</button>
						</div>
						<div className={Styles['form-input']}>
							<input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" disabled={d.isSubmitting} className="text-[14px]"/>
							<label htmlFor="confirm-password" className="text-[14px]">Confirm Password</label>
							<button type="button" disabled={d.isSubmitting} className={Styles['btn-toggle']}>
								<i className="uil uil-eye"/>
							</button>
						</div>
					</div>
					<div className="mt-8">
						<button type="submit" className="w-full bg-sky-400 text-white rounded-[4px] py-1 hover:opacity-80 flex flex-row items-center justify-center disabled:opacity-50">
							{d.isSubmitting ? <i className="uil uil-spinner-alt leading-none icon-loader text-[18px]"/> : <span>Submit</span>}
						</button>
					</div>
				</form>
			</div>
		</div>
	</>)
}