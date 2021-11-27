import { Layout } from 'components/templates';
import { ProductBrowser } from 'components/templates/product-browser';
import gql from 'graphql-tag';
import { GetServerSideProps, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { SimpleCategoryRelation } from 'types/category';
import { getSortingParams, ProductItemData, SortingAlgos } from 'types/product';
import { Sponsor } from 'types/sponsor';
import { SimpleBrand } from 'types/brand';
import { FOOTER_GQL } from 'types/footer';
import { Pagination } from 'components/page/pagination';

type SectionIndexPageQueryData = {
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

type Props = {
	sponsors: Sponsor[];
	products: ProductItemData[];
	categories: SimpleCategoryRelation[];
	section: string;
	brands: SimpleBrand[];
	pagination: Pagination;
};

const SectionPage: NextPage<Props> = ({
	brands,
	section,
	sponsors,
	products,
	categories,
	pagination,
}): ReactElement => (
	<Layout sponsors={sponsors}>
		<ProductBrowser
			section={section}
			brandSlug=""
			categorySlug=""
			products={products}
			categories={categories}
			brands={brands}
			sortingAlgo={SortingAlgos.LatestArrivals}
			pagination={pagination}
		/>
	</Layout>
);

const generateQuery = () => gql`
	query products($section: String!, $limit: Int!, $start: Int!, $sort: String!) {
		${FOOTER_GQL}
		productsConnection(where: { section: { slug: $section } }, limit: $limit, start: $start, sort: $sort) {
			products: values {
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
					parent {
						slug
					}
				}
				section {
					slug
				}
				price
				discountPrice
				slug
				sku
			}
			aggregate {
				count
			}
		}
		categories(where: { appearsIn: { slug: $section } }) {
			id
			title
			slug
			parent {
				id
				title
				slug
			}
		}
		brands(where: { products: { section: { slug: $section } } }) {
			slug
			title
			id
		}
	}
`;

export const getServerSideProps: GetServerSideProps<Props, { section: string }> = async context => {
	const section = context.params?.section || '';
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

	const [, sort] = getSortingParams(context.query.sort);

	try {
		const { data } = await client.query<SectionIndexPageQueryData>({
			query: generateQuery(),
			variables: { section, limit: limitInt, start: (pageInt - 1) * limitInt, sort },
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
			props: {
				section,
				sponsors: footer.sponsors,
				categories,
				products,
				brands,
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

export default SectionPage;
