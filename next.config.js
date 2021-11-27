module.exports = {
	publicRuntimeConfig: {
		gaID: 'UA-96207333-1',
		snippyToken:
			process.env.SNIPCART_API_TOKEN ||
			'NzYyYzFjNDktZGM5MS00NDk4LTg0ZjUtZGI0MWMyNmE5ZjY1NjM3MDkwMTEzMjc5MDcwNDI4', // THIS IS THE PROD VERSION
	},
	i18n: {
		locales: ['en-US', 'de-DE', 'zh-CN', 'ja'],
		defaultLocale: 'en-US',
	},
	redirects: [
		{
			source: '/en-US/:path*',
			destination: '/:path*',
			permanent: true,
		},
		{
			source: '/en-us/:path*',
			destination: '/:path*',
			permanent: true,
		},
	],
};

/*module.exports = withMDX(
	withCSS({
		publicRuntimeConfig: {
			gaID: 'UA-96207333-1',
			snippyToken:
				process.env.SNIPCART_API_TOKEN ||
				'NzYyYzFjNDktZGM5MS00NDk4LTg0ZjUtZGI0MWMyNmE5ZjY1NjM3MDkwMTEzMjc5MDcwNDI4', // THIS IS THE PROD VERSION
		},
		pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	}),
);
*/
