import { Layout } from 'components/templates';
import { CustomerServiceTemplate } from 'components/templates/customer-service-template';
import gql from 'graphql-tag';
import { Markup } from 'interweave';
import { GetServerSidePropsResult, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';

type DeliveryPageQueryData = {
	footer: { sponsors: Sponsor[] };
	delivery: { Content: string };
};

type DeliveryPageProps = {
	sponsors: Sponsor[];
	content: string;
};

export const GET_DELIVERY_PAGE_DATA = gql`
	query deliveryPageData {
		${FOOTER_GQL}
		delivery { Content }
	}
`;

const DeliveryPage: NextPage<DeliveryPageProps> = ({ sponsors, content }): ReactElement => (
	<Layout sponsors={sponsors}>
		<CustomerServiceTemplate>
			<Markup content={content} />
		</CustomerServiceTemplate>
	</Layout>
);

export async function getServerSideProps(): Promise<GetServerSidePropsResult<DeliveryPageProps>> {
	try {
		const { data } = await client.query<DeliveryPageQueryData>({
			query: GET_DELIVERY_PAGE_DATA,
		});

		const {
			footer: { sponsors },
			delivery: { Content: content },
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

export default DeliveryPage;
