import { Layout } from 'components/templates';
import { CustomerServiceTemplate } from 'components/templates/customer-service-template';
import gql from 'graphql-tag';
import { Markup } from 'interweave';
import { GetServerSidePropsResult, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';

type AffiliatesPageQueryData = {
	footer: { sponsors: Sponsor[] };
	affiliate: { Content: string };
};

type AffiliatesPageProps = {
	sponsors: Sponsor[];
	content: string;
};

export const GET_AFFILIATES_PAGE_DATA = gql`
	query affiliatesPageData {
		${FOOTER_GQL}
		affiliate { Content }
	}
`;

const AffiliatesPage: NextPage<AffiliatesPageProps> = ({ sponsors, content }): ReactElement => (
	<Layout sponsors={sponsors}>
		<CustomerServiceTemplate>
			<Markup content={content} />
		</CustomerServiceTemplate>
	</Layout>
);

export async function getServerSideProps(): Promise<GetServerSidePropsResult<AffiliatesPageProps>> {
	try {
		const { data } = await client.query<AffiliatesPageQueryData>({
			query: GET_AFFILIATES_PAGE_DATA,
		});

		const {
			footer: { sponsors },
			affiliate: { Content: content },
		} = data;

		return {
			props: {
				sponsors,
				content,
			},
		};
	} catch (error) {
		console.log(JSON.stringify(error));
		return { notFound: true };
	}
}

export default AffiliatesPage;
