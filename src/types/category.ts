import { Category, Section } from 'types';

export type SimpleCategory = Pick<Category, 'id' | 'title' | 'slug'>;

export type SimpleCategoryRelation = SimpleCategory & {
	parent: null | SimpleCategory;
} & {
	categoryDescription: {
		section: {
			slug: string;
		};
		description: string;
	}[];
};

export type AdvancedCategoryRelation = SimpleCategoryRelation & {
	appearsIn: Pick<Section, 'id' | 'title' | 'slug'>[];
};

export type SimpleCategoryRelationLink = SimpleCategoryRelation & {
	depth: number;
};

export type AdvancedCategoryRelationLink = AdvancedCategoryRelation & {
	depth: number;
};

export const CATEGORY_RELATION_GQL = `
	id
	title
	slug
	parent {
		id
		title
		slug
	}
	categoryDescription {
		section {
		  slug
		}
		description
	}
`;

export const ADVANCED_CATEGORY_RELATION_GQL = `
	id
	title
	slug
	parent {
		id
		title
		slug
	}
	categoryDescription {
		section {
		slug
		}
		description
	}
	appearsIn {
		id
		title
		slug
	}
`;
