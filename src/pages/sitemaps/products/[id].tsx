// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import gql from 'graphql-tag';
import { Brand, Category, Product, Section } from 'types';
import { CommonPageProps } from 'types/page';
import { clientWithCache } from 'services/graphql';
import { generateProductLink } from 'utils/href';

type SitemapQueryData = {
	products: (Pick<Product, 'slug' | 'updated_at' | 'sku'> & { section: Pick<Section, 'slug'> } & Pick<
			Category,
			'slug'
		> & { brand: Pick<Brand, 'slug'> })[];
};

type Paths = {
	id: string;
};

const GET_SITEMAP_DATA = gql`
	query sitemapQueryProducts($start: Int!) {
		products(limit: 50, start: $start) {
			slug
			section {
				slug
			}
			appearsIn {
				slug
			}
			updated_at
			sku
			brand {
				slug
			}
		}
	}
`;

export async function getServerSideProps(
	context: GetServerSidePropsContext<Paths>,
): Promise<GetServerSidePropsResult<CommonPageProps<Record<string, never>>>> {
	// Method to source urls from cms
	// const urls = await fetch('https//example.com/api')

	try {
		const id = context.params?.id || '';
		const idInt = parseInt(id.replace(/[^\d]/g, ''));

		const { data } = await clientWithCache.query<SitemapQueryData>({
			query: GET_SITEMAP_DATA,
			variables: { start: idInt * 50 },
		});

		const { products } = data;
		const fields: ISitemapField[] = [];

		for (let i = 0; i < products.length; i++) {
			const loc = generateProductLink(
				products[i].section.slug,
				products[i].brand.slug,
				products[i].slug,
				products[i].sku,
			);

			fields.push({ loc: `https://omnifinery.com${loc}`, lastmod: products[i].updated_at });
		}

		return getServerSideSitemap(context, fields);
	} catch (error) {
		console.log(error);
		console.log(JSON.stringify(error));
		return getServerSideSitemap(context, []);
	}
}

// Default export to prevent next.js errors
const ProductSitemapPage: NextPage = (): null => null;

export default ProductSitemapPage;
