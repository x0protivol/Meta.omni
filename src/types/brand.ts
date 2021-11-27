import { Brand } from 'types';

export type SimpleBrand = Pick<Brand, 'id' | 'title' | 'slug' | 'description'>;

export const SIMPLE_BRAND_GQL = `
	slug
	title
	id
	description
`;
