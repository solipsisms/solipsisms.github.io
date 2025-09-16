import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const workCollections = {
	work: defineCollection({
		//load mdx files in content/work directory
		loader: glob({ base: './src/content/work', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
            kind: z.string(),
            icon: z.string(),
			description: z.string(),
			tech: z.array(z.string()),
		}),
	}),
};

export const collections = {
    work: workCollections,
};