import { Layout } from 'components/templates';
import gql from 'graphql-tag';
import { GetServerSidePropsResult, NextPage } from 'next';
import React, { ReactElement } from 'react';
import { client } from 'services/graphql';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';
import { Markup } from 'interweave';

import styles from 'styles/text-container.module.scss';

type TermsAndConditionsPageQueryData = {
	footer: { sponsors: Sponsor[] };
	termsAndCondition: { content: string };
};

type TermsAndConditionsPageProps = {
	sponsors: Sponsor[];
	content: string;
};

export const GET_TERMS_AND_CONDITIONS_PAGE_DATA = gql`
	query termsAndConditionsPageData {
		${FOOTER_GQL}
		termsAndCondition { content }
	}
`;

const TermsAndConditionsPage: NextPage<TermsAndConditionsPageProps> = ({ sponsors, content }): ReactElement => (
	<Layout sponsors={sponsors}>
		<main className={styles.container}>
			<Markup content={content} />
		</main>
	</Layout>
);

export async function getServerSideProps(): Promise<GetServerSidePropsResult<TermsAndConditionsPageProps>> {
	try {
		const { data } = await client.query<TermsAndConditionsPageQueryData>({
			query: GET_TERMS_AND_CONDITIONS_PAGE_DATA,
		});

		const {
			footer: { sponsors },
			termsAndCondition: { content },
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

export default TermsAndConditionsPage;
