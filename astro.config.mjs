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
					label: 'Terraform Associate Certification 003',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Associate Learning Path', slug: 'terraform-associate-cert-003/the-associate-learning-path' },
						{ label: 'The Associate Exam Content List', slug: 'terraform-associate-cert-003/the-associate-exam-content-list' },
						{ label: 'The Associate Sample Questions', slug: 'terraform-associate-cert-003/the-associate-sample-questions' },
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
