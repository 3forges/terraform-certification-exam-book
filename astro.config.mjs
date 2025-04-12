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
						{ label: 'The Terraform Associate Learning Path', slug: 'terraform-associate-cert-003/the-associate-learning-path' },
						{ label: 'The Terraform Associate (003) Tutorials', slug: 'terraform-associate-cert-003/the-associate-tutorials' },
						{ label: 'The Terraform Associate Exam Content List', slug: 'terraform-associate-cert-003/the-associate-exam-content-list' },
						{ label: 'The Terraform Associate Sample Questions', slug: 'terraform-associate-cert-003/the-associate-sample-questions' },
					],
				},
				{
					label: 'Topics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'State Locking', slug: 'topics/state-locking' },
						{ label: 'Managing Environments', slug: 'topics/managing-environments' },
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
