export function sleep(sec: number) {
	return new Promise((resolve) => {
		setTimeout(resolve.bind(null, {}), (sec * 1000))
	})
}

export function formatPrice(val: number, minFraction?: number, maxFraction?: number) {
	return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: minFraction || 0, maximumFractionDigits: maxFraction || 0}).format(val)
}