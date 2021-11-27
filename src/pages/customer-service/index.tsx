import { Layout } from 'components/templates';
import { CustomerServiceTemplate } from 'components/templates/customer-service-template';
import gql from 'graphql-tag';
import { Markup } from 'interweave';
import { GetServerSidePropsResult, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';

type CustomerServicePageQueryData = {
	footer: { sponsors: Sponsor[] };
	customerService: { Content: string };
};

type CustomerServicePageProps = {
	sponsors: Sponsor[];
	content: string;
};

export const GET_CUSTOMER_SERVICE_PAGE_DATA = gql`
	query sizingPageData {
		${FOOTER_GQL}
		customerService { Content }
	}
`;

const CustomerServicePage: NextPage<CustomerServicePageProps> = ({ sponsors, content }): ReactElement => (
	<Layout sponsors={sponsors}>
		<CustomerServiceTemplate>
			<Markup content={content} />
		</CustomerServiceTemplate>
	</Layout>
);

export async function getServerSideProps(): Promise<GetServerSidePropsResult<CustomerServicePageProps>> {
	try {
		const { data } = await client.query<CustomerServicePageQueryData>({
			query: GET_CUSTOMER_SERVICE_PAGE_DATA,
		});

		const {
			footer: { sponsors },
			customerService: { Content: content },
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

export default CustomerServicePage;
