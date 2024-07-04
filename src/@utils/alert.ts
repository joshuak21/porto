import Swal from 'sweetalert2'

export async function showAlert(
	type: 'success' | 'info' | 'error',
	title: string,
	message: string,
) {
	const toast: typeof Swal = Swal.mixin({
		toast: true,
		position: 'top-right',
		icon: type,
		title: title,
		html: message,
		showConfirmButton: false,
		timer: 4000
	})
	await toast.fire()
}