import { Layout } from 'components/templates';
import gql from 'graphql-tag';
import { GetServerSidePropsResult, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';
import { Markup } from 'interweave';

import styles from 'styles/text-container.module.scss';

type PrivacyPolicyPageQueryData = {
	footer: { sponsors: Sponsor[] };
	privacyPolicy: { Content: string };
};

type PrivacyPolicyPageProps = {
	sponsors: Sponsor[];
	content: string;
};

export const GET_PRIVACY_POLICY_PAGE_DATA = gql`
	query privacyPolicyPageData {
		${FOOTER_GQL}
		privacyPolicy { Content }
	}
`;

const PrivacyPolicyPage: NextPage<PrivacyPolicyPageProps> = ({ sponsors, content }): ReactElement => (
	<Layout sponsors={sponsors}>
		<main className={styles.container}>
			<Markup content={content} />
		</main>
	</Layout>
);

export async function getServerSideProps(): Promise<GetServerSidePropsResult<PrivacyPolicyPageProps>> {
	try {
		const { data } = await client.query<PrivacyPolicyPageQueryData>({
			query: GET_PRIVACY_POLICY_PAGE_DATA,
		});

		const {
			footer: { sponsors },
			privacyPolicy: { Content: content },
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

export default PrivacyPolicyPage;
