const path = require('path')

const repo = 'porto'
const basePath = `/${repo}`

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
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
	basePath: basePath,
}

module.exports = nextConfig
