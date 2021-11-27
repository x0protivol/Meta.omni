import { Pagination } from 'components/page/pagination';
import { Layout } from 'components/templates';
import { ProductBrowser } from 'components/templates/product-browser';
import gql from 'graphql-tag';
import { GetServerSideProps, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { SimpleBrand, SIMPLE_BRAND_GQL } from 'types/brand';
import { CATEGORY_RELATION_GQL, SimpleCategoryRelation } from 'types/category';
import { FOOTER_GQL } from 'types/footer';
import { CommonPageProps } from 'types/page';
import { getSortingParams, ProductItemData, PRODUCT_ITEM_GQL, SortingAlgos } from 'types/product';
import { Sponsor } from 'types/sponsor';

type CategoryPageQueryData = {
	footer: {
		sponsors: Sponsor[];
	};
	categories: SimpleCategoryRelation[];
	productsConnection: { products: ProductItemData[]; aggregate: { count: number } };
	brands: SimpleBrand[];
};

type Props = {
	sponsors: Sponsor[];
	products: ProductItemData[];
	categories: SimpleCategoryRelation[];
	section: string;
	brands: SimpleBrand[];
	category: string;
	sortingAlgo: SortingAlgos;
	pagination: Pagination;
};

const CategoryPage: NextPage<Props> = ({
	sortingAlgo,
	category,
	brands,
	section,
	sponsors,
	products,
	categories,
	pagination,
}): ReactElement => (
	<Layout sponsors={sponsors}>
		<ProductBrowser
			brands={brands}
			section={section}
			brandSlug=""
			categorySlug={category}
			products={products}
			categories={categories}
			sortingAlgo={sortingAlgo}
			pagination={pagination}
		/>
	</Layout>
);

const CATEGORY_PAGE_QUERY = gql`
	query products($section: String!, $category: String!, $sort: String!, $limit: Int!, $start: Int!) {
		${FOOTER_GQL}
		productsConnection(where: { section: { slug: $section }, appearsIn: { slug: $category } }, sort: $sort, limit: $limit, start: $start) {
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

export const getServerSideProps: GetServerSideProps<
	CommonPageProps<Props>,
	{ section: string; category: string }
> = async context => {
	try {
		const section = context.params?.section || '';
		const category = context.params?.category || '';
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

		const { data } = await client.query<CategoryPageQueryData>({
			query: CATEGORY_PAGE_QUERY,
			variables: { section, category, sort, limit: limitInt, start: (pageInt - 1) * limitInt },
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
			//notFound: true,
			props: {
				sortingAlgo,
				brands,
				section,
				sponsors: footer.sponsors,
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
		return { props: { error: { status: 500, message: 'test' } } };
	}
};

export default CategoryPage;
