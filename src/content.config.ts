import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './consts';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.enum(CATEGORIES.map((item) => item.name) as [string, ...string[]]),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
			series: z.string().optional(),
		}),
});

export const collections = { blog };
