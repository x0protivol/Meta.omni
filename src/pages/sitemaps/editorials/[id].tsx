// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import gql from 'graphql-tag';
import { Editorial, Section } from 'types';
import { CommonPageProps } from 'types/page';
import { clientWithCache } from 'services/graphql';

type SitemapQueryData = {
	editorials: (Pick<Editorial, 'slug' | 'updated_at'> & { appearsIn: Pick<Section, 'slug'>[] })[];
};

const GET_SITEMAP_DATA = gql`
	query sitemapQuery($start: Int!) {
		editorials(limit: 50, start: $start) {
			slug
			appearsIn {
				slug
			}
			updated_at
		}
	}
`;

type Paths = {
	id: string;
};

export async function getServerSideProps(
	context: GetServerSidePropsContext<Paths>,
): Promise<GetServerSidePropsResult<CommonPageProps<Record<string, never>>>> {
	try {
		const id = context.params?.id || '';
		const idInt = parseInt(id.replace(/[^\d]/g, ''));

		const { data } = await clientWithCache.query<SitemapQueryData>({
			query: GET_SITEMAP_DATA,
			variables: { start: idInt * 50 },
		});

		const { editorials } = data;
		const fields: ISitemapField[] = [];

		for (let i = 0; i < editorials.length; i++) {
			const loc = `https://omnifinery.com/editorials/${editorials[i].appearsIn[0].slug}/${editorials[i].slug}`;
			fields.push({ loc, lastmod: editorials[i].updated_at });
		}

		return getServerSideSitemap(context, fields);
	} catch (error) {
		console.log(error);
		console.log(JSON.stringify(error));
		return getServerSideSitemap(context, []);
	}
}

// Default export to prevent next.js errors
const EditorialSitemapPage: NextPage = (): null => null;

export default EditorialSitemapPage;
