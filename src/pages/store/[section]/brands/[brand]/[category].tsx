import React, { ReactElement } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Sponsor } from 'types/sponsor';
import { CATEGORY_RELATION_GQL, SimpleCategoryRelation } from 'types/category';
import { getSortingParams, ProductItemData, PRODUCT_ITEM_GQL, SortingAlgos } from 'types/product';
import { SimpleBrand, SIMPLE_BRAND_GQL } from 'types/brand';
import { Layout } from 'components/templates';
import { ProductBrowser } from 'components/templates/product-browser';
import { client } from 'services/graphql';
import gql from 'graphql-tag';
import { FOOTER_GQL } from 'types/footer';
import { Pagination } from 'components/page/pagination';

type BrandCategoryPageQueryData = {
	footer: {
		sponsors: Sponsor[];
	};
	categories: SimpleCategoryRelation[];
	brands: SimpleBrand[];
	productsConnection: { products: ProductItemData[]; aggregate: { count: number } };
};

type BrandCategoryPageProps = {
	sponsors: Sponsor[];
	products: ProductItemData[];
	categories: SimpleCategoryRelation[];
	section: string;
	brand: string;
	brands: SimpleBrand[];
	category: string;
	sortingAlgo: SortingAlgos;
	pagination: Pagination;
};

const BrandCategoryPage: NextPage<BrandCategoryPageProps> = ({
	sponsors,
	products,
	categories,
	section,
	brand,
	brands,
	category,
	sortingAlgo,
	pagination,
}): ReactElement => (
	<Layout sponsors={sponsors}>
		<ProductBrowser
			brands={brands}
			section={section}
			brandSlug={brand}
			categorySlug={category}
			products={products}
			categories={categories}
			sortingAlgo={sortingAlgo}
			pagination={pagination}
		/>
	</Layout>
);

const BRAND_CATEGORY_PAGE_QUERY = gql`
	query products($section: String!, $category: String!, $brand: String!, $sort: String!, $limit: Int!, $start: Int!) {
		${FOOTER_GQL}
		productsConnection(where: { section: { slug: $section }, brand: { slug: $brand }, appearsIn: { slug: $category } }, sort: $sort, limit: $limit, start: $start) {
			products: values { ${PRODUCT_ITEM_GQL} }
			aggregate { count }
		}
		categories(where: { appearsIn: { slug: $section } }) {
			${CATEGORY_RELATION_GQL}
		}
		brands(where: { products: { appearsIn: { slug: $category }, section: { slug: $section } } }) {
			${SIMPLE_BRAND_GQL}
		}
	}
`;

const getServerSideProps: GetServerSideProps<
	BrandCategoryPageProps,
	{ section: string; category: string; brand: string }
> = async context => {
	try {
		const section = context.params?.section || '';
		const category = context.params?.category || '';
		const brand = context.params?.brand || '';
		let page = context.query.page || '1';
		let limit = context.query.limit || '24';

		if (Array.isArray(page)) {
			page = page[0];
		}

		if (Array.isArray(limit)) {
			limit = limit[0];
		}

		const pageInt = parseInt(page);
		const limitInt = parseInt(limit);

		const [sortingAlgo, sort] = getSortingParams(context.query.sort);

		const { data } = await client.query<BrandCategoryPageQueryData>({
			query: BRAND_CATEGORY_PAGE_QUERY,
			variables: { section, category, sort, brand, limit: limitInt, start: (pageInt - 1) * limitInt },
		});

		const {
			categories,
			productsConnection: {
				products,
				aggregate: { count },
			},
			footer: { sponsors },
			brands,
		} = data;

		return {
			//notFound: true,
			props: {
				brand,
				sortingAlgo,
				brands,
				section,
				sponsors: sponsors,
				categories,
				products,
				category,
				pagination: {
					currentPage: pageInt,
					perPage: limitInt,
					totalCount: count,
				},
			},
		}; // { props: { data } };
	} catch (error) {
		console.error(JSON.stringify(error));
		return { notFound: true };
	}
};

export { getServerSideProps };
export default BrandCategoryPage;
