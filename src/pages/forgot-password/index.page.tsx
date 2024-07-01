import { useState, useReducer } from 'react'
import HeadingComponent from '@/components/heading'

import Styles from './style.module.css'

class ElementData {
	public isSubmitting: boolean = false
}

export default function ForgotPasswordPage(): JSX.Element {
	const [d] = useState(new ElementData())
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

	return (<>
		<HeadingComponent title="Forgot Password"/>
		<div className="w-[100vw] h-[100vh] bg-sky-200 relative">
			<div className="bg-white p-4 rounded-md absolute top-1/2 left-1/2">
				<p>Forgot Password</p>
			</div>
		</div>
	</>)
}