import { Section } from 'types';

export type SimpleSection = Pick<Section, 'id' | 'title' | 'slug'>;

export const SECTION_GQL = `
	id
	title
	slug
`;
