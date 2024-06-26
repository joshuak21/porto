export function sleep(sec: number) {
	return new Promise((resolve) => {
		setTimeout(resolve.bind(null, {}), (sec * 1000))
	})
}