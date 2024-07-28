import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: "app",
		adapter: adapter()
	}
};

export default config;