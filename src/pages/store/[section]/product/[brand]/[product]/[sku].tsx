import React, { ReactElement } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Sponsor } from 'types/sponsor';
import { ProductData, ProductItemData, PRODUCT_GQL, PRODUCT_ITEM_GQL } from 'types/product';
import { Layout } from 'components/templates';
import gql from 'graphql-tag';
import { client } from 'services/graphql';
import { getProductCategory } from 'utils/category';
import { ProductTemplate } from 'components/templates/product';
import { FOOTER_GQL } from 'types/footer';
import { SimpleCategoryRelation } from 'types/category';

type ProductPageQueryData = {
	footer: {
		sponsors: Sponsor[];
	};
	products: ProductData[];
};

type ProductPageSimilarQueryData = {
	category: ProductItemData[];
	brand: ProductItemData[];
};

type Props = {
	sponsors: Sponsor[];
	product: ProductData;
	brandProducts: ProductItemData[];
	categoryProducts: ProductItemData[];
};

const PRODUCT_PAGE_QUERY = gql`
	query product($sku: String!) {
		${FOOTER_GQL}
		products(where: { sku: $sku }) {
			${PRODUCT_GQL}
		}
	}
	`;

const PRODUCT_PAGE_SIMILAR_QUERY = gql`
	query similarProducts($category: String!, $brand: String!, $section: String!) {
		category: products(limit: 7, where: { appearsIn: { slug: $category }, section: { slug: $section } }) {
			${PRODUCT_ITEM_GQL}
		}
		brand: products(limit: 7, where: { brand: { slug: $brand } }) {
			${PRODUCT_ITEM_GQL}
		}
	}
`;

const ProductPage: NextPage<Props> = ({ sponsors, product, categoryProducts, brandProducts }: Props): ReactElement => (
	<Layout sponsors={sponsors}>
		<ProductTemplate
			similarBrandProducts={brandProducts}
			similarCategoryProducts={categoryProducts}
			product={product}
		/>
	</Layout>
);

export const getServerSideProps: GetServerSideProps<Props, { section: string; sku: string }> = async context => {
	const sku = context.params?.sku || '';
	const section = context.params?.section || '';

	const { data } = await client.query<ProductPageQueryData>({
		query: PRODUCT_PAGE_QUERY,
		variables: { sku },
	});

	if (data.products.length < 1) {
		return {
			notFound: true,
		};
	}

	const product = data.products[0];

	const brandSlug = product.brand.slug;
	const category = getProductCategory(product.appearsIn as SimpleCategoryRelation[]);

	if (category === null) {
		return {
			notFound: true,
		};
	}

	const categorySlug = category.slug;

	const { data: similarData } = await client.query<ProductPageSimilarQueryData>({
		query: PRODUCT_PAGE_SIMILAR_QUERY,
		variables: { brand: brandSlug, category: categorySlug, section },
	});

	const { products, footer } = data;

	if (products.length !== 1) {
		return {
			notFound: true,
		};
	}

	return {
		//notFound: true,
		props: {
			sponsors: footer.sponsors,
			product,
			brandProducts: similarData.brand,
			categoryProducts: similarData.category,
		},
	}; // { props: { data } };
};

export default ProductPage;
