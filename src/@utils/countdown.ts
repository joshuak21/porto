import { useEffect, useState } from 'react'

const useCountdown = (targetDate: number) => {
	const
		countDownDate = new Date(targetDate).getTime(),
		[countDown, setCountDown] = useState<number>(countDownDate - new Date().getTime())

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime())
		}, 1000)

		return () => clearInterval(interval)
	}, [countDownDate])

	return getReturnValues(countDown)
}

const getReturnValues = (countDown: number): Array<number> => {
	const
		days: number = Math.floor(countDown / (1000 * 60 * 60 * 24)),
		hours = Math.floor(
			(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		  ),
		minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)),
		seconds = Math.floor((countDown % (1000 * 60)) / 1000)
	
	return [days, hours, minutes, seconds]
}

export { useCountdown }