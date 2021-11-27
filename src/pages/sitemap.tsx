import React, { FC, ReactElement, useMemo } from 'react';
import gql from 'graphql-tag';
import { GetServerSidePropsResult, NextPage } from 'next';
import { FOOTER_GQL } from 'types/footer';
import { Sponsor } from 'types/sponsor';
import { Layout } from 'components/templates';
import { client } from 'services/graphql';
import { AdvancedCategoryRelation, AdvancedCategoryRelationLink, ADVANCED_CATEGORY_RELATION_GQL } from 'types/category';
import { SECTION_GQL, SimpleSection } from 'types/section';
import { generateCategorySectionTree } from 'utils/category';

import styles from './sitemap.module.scss';
import Link from 'next/link';

type SitemapPageQueryData = {
	footer: { sponsors: Sponsor[] };
	categories: AdvancedCategoryRelation[];
	sections: SimpleSection[];
};

type SitemapPageProps = {
	sponsors: Sponsor[];
	sections: SimpleSection[];
	categories: AdvancedCategoryRelation[];
};

export const GET_SITEMAP_PAGE_DATA = gql`
	query sitemapPageData {
		${FOOTER_GQL}
		categories {
			${ADVANCED_CATEGORY_RELATION_GQL}
		}
		sections {
			${SECTION_GQL}
		}
	}
`;

type SitemapSectionProps = {
	section: SimpleSection;
	categories: AdvancedCategoryRelation[];
};

function formLink(section: SimpleSection, content: AdvancedCategoryRelationLink): string {
	let href = '';

	if (section.slug === 'editorial') {
		href = '/editorial';
	} else {
		href = `/store/${section.slug}`;
	}

	href = `${href}/${content.slug}`;

	return href;
}

const SitemapSection: FC<SitemapSectionProps> = ({ section, categories }): ReactElement => {
	const sections = useMemo(() => {
		const sections: { top: AdvancedCategoryRelationLink; contents: AdvancedCategoryRelationLink[] }[] = [];
		const tree = generateCategorySectionTree(categories, section);

		for (let i = 0; i < tree.length; i++) {
			console.log(tree[i].depth);
			if (tree[i].depth === 0) {
				sections.push({ top: tree[i], contents: [] });
			} else {
				sections[sections.length - 1].contents.push(tree[i]);
			}
		}

		return sections;
	}, [section, categories]);

	return (
		<section key={section.id} className={styles.container}>
			<h2>{section.title}</h2>
			<div>
				{sections.map(sec => (
					<>
						<ul>
							<h2>
								<Link href={formLink(section, sec.top)}>
									<a>{sec.top.title}</a>
								</Link>
							</h2>
							{sec.contents.map(content => (
								<li style={{ marginLeft: `${(content.depth - 1) * 0.715}rem` }} key={content.id}>
									<Link href={formLink(section, content)}>
										<a>{content.title}</a>
									</Link>
								</li>
							))}
						</ul>
					</>
				))}
			</div>
		</section>
	);
};

const SitemapPage: NextPage<SitemapPageProps> = ({ sponsors, categories, sections }): ReactElement => {
	return (
		<Layout sponsors={sponsors}>
			{sections.map(section => (
				<SitemapSection key={section.id} section={section} categories={categories} />
			))}
		</Layout>
	);
};

export async function getServerSideProps(): Promise<GetServerSidePropsResult<SitemapPageProps>> {
	try {
		const { data } = await client.query<SitemapPageQueryData>({
			query: GET_SITEMAP_PAGE_DATA,
		});

		const {
			footer: { sponsors },
			categories,
			sections,
		} = data;

		return {
			props: {
				sponsors,
				categories,
				sections,
			},
		};
	} catch (error) {
		console.log(JSON.stringify(error));
		return { notFound: true };
	}
}

export default SitemapPage;
