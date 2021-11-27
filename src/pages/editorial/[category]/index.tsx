import { getPaginationParams, Pagination } from 'components/page/pagination';
import { Layout } from 'components/templates';
import { EditorialBrowser } from 'components/templates/editorial-browser';
import gql from 'graphql-tag';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import React from 'react';
import { client } from 'services/graphql';

import { SimpleCategory } from 'types/category';
import { EditorialItemData } from 'types/editorial';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';

type EditorialIndexQueryData = {
	categories: SimpleCategory[];
	selection: SimpleCategory[];
	footer: {
		sponsors: Sponsor[];
	};
	editorialsConnection: { editorials: EditorialItemData[]; aggregate: { count: number } };
};

type Props = {
	sponsors: Sponsor[];
	categories: SimpleCategory[];
	selection: SimpleCategory[];
	editorials: EditorialItemData[];
	pagination: Pagination;
};

const EditorialIndexPage: NextPage<Props> = ({ sponsors, categories, selection, editorials, pagination }) => (
	<Layout sponsors={sponsors}>
		<EditorialBrowser
			selection={selection}
			categories={categories}
			editorials={editorials}
			pagination={pagination}
		/>
	</Layout>
);

const GET_EDITORIAL_INDEX_DATA = gql`
	query editorialIndexData($limit: Int!, $start: Int!, $category: String!) {
		categories(where: { appearsIn: { slug: "editorial" } }) {
			slug
			title
			id
		}
		${FOOTER_GQL}
		editorialsConnection(
			where: { appearsIn: { slug: $category } }
			sort: "published_at:desc,publishOverride:desc"
			limit: $limit
			start: $start
		) {
			editorials: values {
				title
				slug
				id
				appearsIn {
					slug
				}
				headline
				cover {
					url
					alternativeText
				}
				published_at
				publishOverride
			}
			aggregate { count }
		}
		selection: categories(where: { slug: $category }) {
			title
			id
			slug
		}
	}
`;

type Paths = {
	category: string;
};

export async function getServerSideProps(
	context: GetServerSidePropsContext<Paths>,
): Promise<GetServerSidePropsResult<Props>> {
	try {
		const category = context.params?.category || '';
		const [currentPage, perPage] = getPaginationParams(context.query, '15');

		const { data } = await client.query<EditorialIndexQueryData>({
			query: GET_EDITORIAL_INDEX_DATA,
			variables: { limit: perPage, start: (currentPage - 1) * perPage, category },
		});

		const {
			footer: { sponsors },
			editorialsConnection: {
				editorials,
				aggregate: { count },
			},
			selection,
			categories,
		} = data;

		return {
			props: {
				sponsors,
				editorials,
				selection,
				categories,
				pagination: { currentPage, perPage, totalCount: count },
			},
		};
	} catch (error) {
		console.error(JSON.stringify(error));
		return { notFound: true };
	}
}

export default EditorialIndexPage;
