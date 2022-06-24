import rss from '@astrojs/rss';

export const get = () => rss({
	title: 'Ink',
	description: 'A starter theme for Astro.',
	site: 'https://ink.paulapplegate.com/', // Currently import.meta.env.SITE in astro.config.mjs doesn't work in @astrojs/rss 0.2.0, so site URL needs to be defined here.
	items: import.meta.glob('./articles/**/*.md'),
	customData: `<language>en-us</language>`
  });