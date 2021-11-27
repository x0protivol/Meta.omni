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
import { CommonPageProps } from 'types/page';
import { Sponsor } from 'types/sponsor';

type EditorialIndexQueryData = {
	categories: SimpleCategory[];
	footer: {
		sponsors: Sponsor[];
	};
	editorialsConnection: { editorials: EditorialItemData[]; aggregate: { totalCount: number } };
	selection: SimpleCategory[];
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
	query editorialIndexData($limit: Int!, $start: Int!) {
		categories(where: { appearsIn: { slug: "editorial" } }) {
			slug
			title
			id
		}
		${FOOTER_GQL}
		editorialsConnection(sort: "published_at:desc,publishOverride:desc", limit: $limit, start: $start) {
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
			aggregate { totalCount }
		}
		selection: categories(limit: 0) {
			slug
			id
			title
		}
	}
`;

export async function getServerSideProps(
	context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<CommonPageProps<Props>>> {
	try {
		console.log('running get getServerSideProps on editorial index page');
		const [currentPage, perPage] = getPaginationParams(context.query, '15');

		const { data } = await client.query<EditorialIndexQueryData>({
			query: GET_EDITORIAL_INDEX_DATA,
			variables: { limit: perPage, start: (currentPage - 1) * perPage },
		});

		const {
			footer: { sponsors },
			editorialsConnection: {
				editorials,
				aggregate: { totalCount },
			},
			selection,
			categories,
		} = data;

		console.log('got following editorials');
		for (let i = 0; i < editorials.length; i++) {
			console.log(`  ${editorials[i].title}`);
		}

		return {
			props: {
				sponsors,
				editorials,
				selection,
				categories,
				pagination: { currentPage, perPage, totalCount },
			},
		};
	} catch (error) {
		console.error(JSON.stringify(error));
		return { props: { error: { status: 500, message: 'test' } } };
	}
}

export default EditorialIndexPage;
