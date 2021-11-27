import React, { ReactElement } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Sponsor } from 'types/sponsor';
import { CATEGORY_RELATION_GQL, SimpleCategoryRelation } from 'types/category';
import { getSortingParams, ProductItemData, PRODUCT_ITEM_GQL, SortingAlgos } from 'types/product';
import { SimpleBrand, SIMPLE_BRAND_GQL } from 'types/brand';
import { Layout } from 'components/templates';
import { ProductBrowser } from 'components/templates/product-browser';
import gql from 'graphql-tag';
import { client } from 'services/graphql';
import { FOOTER_GQL } from 'types/footer';
import { Pagination } from 'components/page/pagination';

type BrandPageQueryData = {
	footer: {
		sponsors: Sponsor[];
	};
	categories: SimpleCategoryRelation[];
	productsConnection: {
		products: ProductItemData[];
		aggregate: {
			count: number;
		};
	};
	brands: SimpleBrand[];
};

type BrandPageProps = {
	sponsors: Sponsor[];
	products: ProductItemData[];
	categories: SimpleCategoryRelation[];
	section: string;
	brands: SimpleBrand[];
	brand: string;
	sortingAlgo: SortingAlgos;
	pagination: Pagination;
};

const BrandPage: NextPage<BrandPageProps> = ({
	sortingAlgo,
	sponsors,
	products,
	categories,
	section,
	brands,
	brand,
	pagination,
}): ReactElement => (
	<Layout sponsors={sponsors}>
		<ProductBrowser
			brands={brands}
			section={section}
			brandSlug={brand}
			products={products}
			categories={categories}
			categorySlug=""
			sortingAlgo={sortingAlgo}
			pagination={pagination}
		/>
	</Layout>
);

const BRAND_PAGE_QUERY = gql`
	query products($section: String!, $brand: String!, $sort: String!, $limit: Int!, $start: Int!) {
		${FOOTER_GQL}
		productsConnection(where: { section: { slug: $section }, brand: { slug: $brand } }, sort: $sort, limit: $limit, start: $start) {
			products: values { ${PRODUCT_ITEM_GQL} }
			aggregate { count }
		}
		categories(where: { appearsIn: { slug: $section } }) {
			${CATEGORY_RELATION_GQL}
		}
		brands(where: { products: { section: { slug: $section } } }) {
			${SIMPLE_BRAND_GQL}
		}
	}
`;

const getServerSideProps: GetServerSideProps<BrandPageProps, { section: string; brand: string }> = async context => {
	try {
		const section = context.params?.section || '';
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

		const { data } = await client.query<BrandPageQueryData>({
			query: BRAND_PAGE_QUERY,
			variables: { section, brand, sort, limit: limitInt, start: (pageInt - 1) * limitInt },
		});

		const {
			categories,
			productsConnection: {
				products,
				aggregate: { count },
			},
			footer,
			brands,
		} = data;

		return {
			// notFound: true
			props: {
				sortingAlgo,
				brands,
				section,
				sponsors: footer.sponsors,
				products,
				categories,
				brand,
				pagination: {
					currentPage: pageInt,
					perPage: limitInt,
					totalCount: count,
				},
			},
		};
	} catch (error) {
		console.log(JSON.stringify(error));
		return { notFound: true };
	}
};

export { getServerSideProps };
export default BrandPage;
