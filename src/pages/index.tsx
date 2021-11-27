import React, { FC, ReactElement } from 'react';
import { gql } from '@apollo/client';
import { client } from 'services/graphql';

import { GetServerSidePropsResult, NextPage } from 'next';
import { Layout } from 'components/templates';
import { Sponsor } from 'types/sponsor';
import { LinkImageData, LINK_IMAGE_GQL } from 'types/homepage';
import { Media } from 'utils/responsive';
import cn from 'classnames';
import styles from './index.module.scss';
import { EditorialItemWithCategory, StretchedEditorialItem } from 'components/editorial/editorial-item';
import Link from 'next/link';
import { EditorialItemData, EDITORIAL_ITEM_GQL } from 'types/editorial';
import { FOOTER_GQL } from 'types/footer';
import { useMeasure } from 'react-use';

type Images = {
	meanswear: LinkImageData;
	stories: LinkImageData;
	womenswear: LinkImageData;
	gallery: LinkImageData;
	banner: LinkImageData;
	bottom: LinkImageData;
};

type Props = {
	sponsors: Sponsor[];
	images: Images;
	editorials: EditorialItemData[];
};

type HomepageQueryData = {
	footer: { sponsors: Sponsor[] };
	homePage: {
		menswearLinkImage: LinkImageData;
		storiesLinkImage: LinkImageData;
		womenswearLinkImage: LinkImageData;
		galleryLinkImage: LinkImageData;
		bannerImage: LinkImageData;
		bottomBanner: LinkImageData;
	};
	editorials: EditorialItemData[];
};

type ImageLinkProps = LinkImageData & { title?: string; href?: string };

const ImageLink: FC<ImageLinkProps> = ({ href, url, alternativeText, title }: ImageLinkProps): ReactElement => {
	let classNames = styles.imageBanner;
	if (href) {
		classNames = cn(styles.imageBanner, styles.imageLink);
	}

	const content = (
		<figure className={classNames}>
			<img src={url} alt={alternativeText || ''} />
			{title && <figcaption>{title}</figcaption>}
		</figure>
	);

	if (href) {
		return <Link href={href}>{content}</Link>;
	}

	return content;
};

const Index: NextPage<Props> = ({ sponsors, images, editorials }: Props) => {
	const [ref, { height }] = useMeasure();

	return (
		<Layout sponsors={sponsors}>
			<Media greaterThanOrEqual="desktop">
				<section className={styles.rowContainer}>
					<ImageLink
						url={images.womenswear.url}
						alternativeText={images.womenswear.alternativeText}
						title="Shop Womenswear"
						href="/store/women"
					/>
					<ImageLink
						url={images.meanswear.url}
						alternativeText={images.meanswear.alternativeText}
						title="Shop Menswear"
						href="/store/men"
					/>
				</section>
				<section className={styles.rowContainer}>
					<ImageLink url={images.banner.url} alternativeText={images.banner.alternativeText} />
				</section>
				<section className={styles.rowContainer}>
					<EditorialItemWithCategory hideHeadline editorial={editorials[0]} />
					<ImageLink
						url={images.gallery.url}
						alternativeText={images.gallery.alternativeText}
						title="Shop Gallery"
						href="/store/gallery"
					/>
				</section>
				<section className={styles.lastRowContainer}>
					<li className={styles.custom}>
						<Link href="/editorial">
							<figure>
								<img
									ref={ref as any}
									src={images.stories.url}
									alt={images.stories.alternativeText || ''}
								/>
								<figcaption>Browse All Stories</figcaption>
							</figure>
						</Link>
					</li>

					<StretchedEditorialItem height={height} hideHeadline editorial={editorials[1]} />
					<StretchedEditorialItem height={height} hideHeadline editorial={editorials[2]} />
				</section>
				<section className={styles.rowContainer}>
					<ImageLink url={images.bottom.url} alternativeText={images.bottom.alternativeText} />
				</section>
			</Media>
			<Media lessThan="desktop">
				<section className={styles.container}>
					<ImageLink
						url={images.womenswear.url}
						alternativeText={images.womenswear.alternativeText}
						title="Shop Womenswear"
						href="/store/women"
					/>
					<ImageLink
						url={images.meanswear.url}
						alternativeText={images.meanswear.alternativeText}
						title="Shop Menswear"
						href="/store/men"
					/>
					<ImageLink url={images.banner.url} alternativeText={images.banner.alternativeText} />

					<EditorialItemWithCategory hideHeadline editorial={editorials[0]} />
					<ImageLink
						url={images.gallery.url}
						alternativeText={images.gallery.alternativeText}
						title="Shop Gallery"
						href="/store/gallery"
					/>
					<ImageLink
						url={images.stories.url}
						title="Browse All Stories"
						alternativeText={images.stories.alternativeText}
						href="/editorial"
					/>
					<EditorialItemWithCategory hideHeadline editorial={editorials[1]} />
					<EditorialItemWithCategory hideHeadline editorial={editorials[2]} />
					<ImageLink url={images.bottom.url} alternativeText={images.bottom.alternativeText} />
				</section>
			</Media>
		</Layout>
	);
};

export const GET_STORE_DATA = gql`
	query homepageData {
		${FOOTER_GQL}
		homePage {
			menswearLinkImage ${LINK_IMAGE_GQL}
			storiesLinkImage ${LINK_IMAGE_GQL}
			womenswearLinkImage ${LINK_IMAGE_GQL}
			galleryLinkImage ${LINK_IMAGE_GQL}
			bannerImage ${LINK_IMAGE_GQL}
			bottomBanner ${LINK_IMAGE_GQL}
		}
		editorials(sort: "published_at:desc", limit: 3) {
			${EDITORIAL_ITEM_GQL}
		}
	}
`;

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
	try {
		const { data } = await client.query<HomepageQueryData>({
			query: GET_STORE_DATA,
		});

		const { homePage, footer, editorials } = data;

		return {
			props: {
				sponsors: footer.sponsors,
				images: {
					meanswear: homePage.menswearLinkImage,
					stories: homePage.storiesLinkImage,
					womenswear: homePage.womenswearLinkImage,
					gallery: homePage.galleryLinkImage,
					banner: homePage.bannerImage,
					bottom: homePage.bottomBanner,
				},
				editorials,
			},
		};
	} catch (error) {
		console.log(JSON.stringify(error));
		return { notFound: true };
	}
}

export default Index;
