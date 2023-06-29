const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	pageExtensions: [
		'page.tsx',
	],
}

module.exports = nextConfig
