import { Layout } from 'components/templates';
import { CustomerServiceTemplate } from 'components/templates/customer-service-template';
import gql from 'graphql-tag';
import { Markup } from 'interweave';
import { GetServerSidePropsResult, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';

type AboutUsPageQueryData = {
	footer: { sponsors: Sponsor[] };
	aboutUs: { Content: string };
};

type AboutUsPageProps = {
	sponsors: Sponsor[];
	content: string;
};

export const GET_ABOUT_US_PAGE_DATA = gql`
	query aboutPageData {
		${FOOTER_GQL}
		aboutUs { Content }
	}
`;

const AboutUsPage: NextPage<AboutUsPageProps> = ({ sponsors, content }): ReactElement => (
	<Layout sponsors={sponsors}>
		<CustomerServiceTemplate>
			<Markup content={content} />
		</CustomerServiceTemplate>
	</Layout>
);

export async function getServerSideProps(): Promise<GetServerSidePropsResult<AboutUsPageProps>> {
	try {
		const { data } = await client.query<AboutUsPageQueryData>({
			query: GET_ABOUT_US_PAGE_DATA,
		});

		const {
			footer: { sponsors },
			aboutUs: { Content: content },
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

export default AboutUsPage;
