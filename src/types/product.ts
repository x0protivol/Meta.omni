import { Brand, Category, ComponentProductVariations, Product, Section, UploadFile } from 'types';
import { EditorialItemData, EDITORIAL_ITEM_GQL } from './editorial';

export type ProductItemData = Pick<Product, 'id' | 'slug' | 'sku' | 'title' | 'price' | 'discountPrice'> & {
	brand: Pick<Brand, 'title' | 'slug'>;
} & { thumbnail: Pick<UploadFile, 'url' | 'alternativeText'> } & {
	appearsIn: (Pick<Category, 'slug' | 'title' | 'id'> & { parent: Pick<Category, 'slug' | 'title' | 'id'> })[];
} & { section: Pick<Section, 'slug'> };

export type ProductData = Pick<Product, 'id' | 'slug' | 'sku' | 'title' | 'price' | 'discountPrice' | 'description'> & {
	brand: Pick<Brand, 'title' | 'slug'>;
} & { thumbnail: Pick<UploadFile, 'url' | 'alternativeText'> } & {
	appearsIn: (Pick<Category, 'slug' | 'title' | 'id'> & { parent: Pick<Category, 'slug' | 'title' | 'id'> })[];
} & { section: Pick<Section, 'slug'> } & { images: Pick<UploadFile, 'url' | 'alternativeText'>[] } & {
	variations: Pick<ComponentProductVariations, 'id' | 'title' | 'abbreviation' | 'skuPrefix' | 'units'>[];
} & {
	relatedProducts?: ProductItemData[];
	relatedEditorials?: EditorialItemData[];
};

export enum SortingAlgos {
	LatestArrivals,
	PriceAscending,
	PriceDescending,
}

export function getSortingParams(urlSortQuery: string | string[] | undefined): [SortingAlgos, string] {
	let sortingAlgo = SortingAlgos.LatestArrivals;
	let sort = 'published_at:desc';

	if (urlSortQuery === 'price-descending') {
		sortingAlgo = SortingAlgos.PriceDescending;
		sort = 'price:desc';
	} else if (urlSortQuery === 'price-ascending') {
		sortingAlgo = SortingAlgos.PriceAscending;
		sort = 'price:asc';
	}

	return [sortingAlgo, `featured:desc,${sort}`];
}

export const PRODUCT_ITEM_GQL = `
	title
	id
	brand {
		title
		slug
	}
	thumbnail {
		url
		alternativeText
	}
	appearsIn {
		slug
		title
		id
		parent {
			slug
			title
			id
		}
	}
	section {
		slug
	}
	price
	discountPrice
	slug
	sku
`;

export const PRODUCT_GQL = `
	title
	id
	brand {
		title
		slug
	}
	thumbnail {
		url
		alternativeText
	}
	appearsIn {
		slug
		title
		id
		parent {
			slug
			title
			id
		}
	}
	section {
		slug
	}
	images {
		url
		alternativeText
	}
	price
	discountPrice
	slug
	sku
	description
	variations {
		id
		title
		skuPrefix
		abbreviation
		units
	}
	relatedProducts {
		${PRODUCT_ITEM_GQL}
	}
	relatedStories {
		${EDITORIAL_ITEM_GQL}
	}
`;
