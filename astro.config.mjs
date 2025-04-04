// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'The Terraform Certification Book',
			social: {
				github: 'https://github.com/3forges/terraform-certification-exam-book',
			},
			sidebar: [
				{
					label: 'Certifications',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Terraform Associate Certification 003', slug: 'certifications/terraform-associate-003' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
