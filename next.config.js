const path = require('path')

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

	assetPrefix = `/${repo}/`
	basePath = `/${repo}`
  }

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
	assetPrefix: assetPrefix,
	basePath: basePath,
	images: {
		loader: 'imgix',
		path: 'https://porto-8140.imgix.net'
	}
}

module.exports = nextConfig