// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://maxifjaved.com',
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			// Create custom entries
			customPages: [
				'https://maxifjaved.com/#about',
				'https://maxifjaved.com/#tech-stack',
				'https://maxifjaved.com/#ai-expertise',
				'https://maxifjaved.com/#services',
				'https://maxifjaved.com/#why-choose-me',
				'https://maxifjaved.com/#recruiters',
				'https://maxifjaved.com/#availability'
			]
		})
	],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true
		}
	},
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto'
	}
});
