import { Layout } from 'components/templates';
import gql from 'graphql-tag';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import React, { FC, ReactElement } from 'react';
import { client } from 'services/graphql';
import { Markup } from 'interweave';

import { EditorialData, EDITORIAL_ITEM_GQL } from 'types/editorial';
import { Sponsor } from 'types/sponsor';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { Tweet } from 'react-twitter-widgets';
import ReactPlayer from 'react-player';

import styles from './[editorial].module.scss';
import { useRouter } from 'next/dist/client/router';
import { cmsURL } from 'config';
import moment from 'moment';
import marked from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { FOOTER_GQL } from 'types/footer';
import { PRODUCT_ITEM_GQL } from 'types/product';
import { ProductItem } from 'components/product/product-item';
import { EditorialItem, EditorialItemBoldText } from 'components/editorial/editorial-item';
import { Media } from 'utils/responsive';
import InstagramEmbed from 'react-instagram-embed';

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
	const html = linkRenderer.call(renderer, href, title, text);
	return html.replace(/^<a /, '<a target="_blank" rel="nofollow noopener noreferrer" ');
};

DOMPurify.addHook('afterSanitizeAttributes', function(node) {
	// set all elements owning target to target=_blank
	if ('target' in node) {
		node.setAttribute('target', '_blank');
	}
	// set non-HTML/MathML links to xlink:show=new
	if (!node.hasAttribute('target') && (node.hasAttribute('xlink:href') || node.hasAttribute('href'))) {
		node.setAttribute('xlink:show', 'new');
	}
});

type EditorialPageData = {
	footer: {
		sponsors: Sponsor[];
	};
	editorials: EditorialData[];
};

type Props = {
	editorial: EditorialData;
	sponsors: Sponsor[];
};

type SocialsProps = {
	editorial: EditorialData;
};

const Socials: FC<SocialsProps> = ({ editorial }: SocialsProps): ReactElement => {
	const path = 'https://omnifinery.com' + useRouter().asPath;
	const msg = editorial.title.replace(/(<([^>]+)>)/gi, '');

	return (
		<ul className={styles.socialsContainer}>
			<li>
				<FacebookShareButton quote={msg} url={path}>
					<FaFacebookF />
				</FacebookShareButton>
			</li>
			<li>
				<TwitterShareButton url={path} title={editorial.title}>
					<FaTwitter />
				</TwitterShareButton>
			</li>
			<li>
				<PinterestShareButton url={path} description={msg} media={cmsURL + editorial.cover.url}>
					<FaPinterestP />
				</PinterestShareButton>
			</li>
		</ul>
	);
};

type ParagraphProps = {
	content: string;
};

type ImageProps = {
	alt: string;
	caption: string | null;
	url: string;
};

type TwitterPostProps = {
	tweetID: string;
};

type YoutubeVideoProps = {
	videoID: string;
	title: string;
};

type SoundloudTrackProps = {
	url: string;
};

type InstagramPostProps = {
	clientAccessToken: string;
	postURL: string;
};

const Paragraph: FC<ParagraphProps> = ({ content }: ParagraphProps): ReactElement => {
	/*const __html = useMemo(() => {
		const dirty = marked(content, { renderer });
		return DOMPurify.sanitize(dirty);
	}, [content]);*/

	return (
		<div className={styles.paragraph}>
			<Markup content={content} />
		</div>
	);
};

const Image: FC<ImageProps> = ({ alt, caption, url }: ImageProps): ReactElement => (
	<figure className={styles.image}>
		<img src={url} alt={alt} />
		{caption && <figcaption>{caption}</figcaption>}
	</figure>
);

const TwitterPost: FC<TwitterPostProps> = ({ tweetID }): ReactElement => (
	<div
		style={{
			marginTop: 24,
		}}
	>
		<Tweet options={{ width: 550, align: 'left', cards: 'hidden' }} tweetId={tweetID} />
	</div>
);

const YoutubeVideo: FC<YoutubeVideoProps> = ({ videoID }): ReactElement => (
	<div style={{ marginTop: 24 }}>
		<ReactPlayer url={`https://www.youtube.com/watch?v=${videoID}`} />
	</div>
);

const SoundcloudTrack: FC<SoundloudTrackProps> = ({ url }): ReactElement => (
	<div style={{ marginTop: 24 }}>
		<ReactPlayer url={url} />
	</div>
);

const InstagramPost: FC<InstagramPostProps> = ({ clientAccessToken, postURL }): ReactElement => (
	<div style={{ marginTop: 24 }}>
		instagram
		{clientAccessToken}
		<InstagramEmbed
			url={postURL}
			clientAccessToken={clientAccessToken}
			maxWidth={1200}
			hideCaption={false}
			containerTagName="div"
			protocol=""
			injectScript
			onFailure={e => console.log(e)}
			onAfterRender={() => console.log('after render')}
			onLoading={() => console.log('loading')}
			onSuccess={e => console.log('success ' + JSON.stringify(e))}
		/>
	</div>
);

const EditorialPage: NextPage<Props> = ({ sponsors, editorial }) => {
	let date = editorial.published_at;
	if (editorial.publishOverride) {
		date = editorial.publishOverride;
	}
	date = moment(date).format('MMMM Do YYYY');

	return (
		<Layout sponsors={sponsors}>
			<article className={styles.container}>
				<h1 className={styles.title}>{editorial.title}</h1>
				<h2 className={styles.headline}>
					<Markup noWrap content={editorial.headline} />
				</h2>
				<Socials editorial={editorial} />
				<img className={styles.cover} src={editorial.cover.url} alt={editorial.cover.alternativeText || ''} />
				{editorial.content.map(content => {
					switch (content.__typename) {
						case 'ComponentEditorialParagraph':
							return <Paragraph key={`p-${content.id}`} content={content.Content || ''} />;
						case 'ComponentEditorialSlide':
							return (
								<Image
									key={`image-${content.id}`}
									caption={content.caption}
									url={content.image?.url || ''}
									alt={content.image?.alternativeText || ''}
								/>
							);
						case 'ComponentEditorialTwitterPost':
							return <TwitterPost key={`twitter-${content.id}`} tweetID={content.tweetID} />;
						case 'ComponentEditorialYoutubeVideo':
							return (
								<YoutubeVideo
									key={`youtube-${content.id}`}
									videoID={content.videoID}
									title={content.title || ''}
								/>
							);
						case 'ComponentEditorialSoundcloudTrack':
							return <SoundcloudTrack key={`soundcloud-${content.id}`} url={content.url} />;
						case 'ComponentEditorialInstagramPost':
							return (
								<InstagramPost
									key={`instagram-${content.id}`}
									clientAccessToken={content.clientAccessToken || ''}
									postURL={content.postURL}
								/>
							);
						default:
							return <p>{content.__typename}</p>;
					}
				})}
				<span className={styles.date}>{date}</span>
				<Socials editorial={editorial} />

				<Media greaterThanOrEqual="desktop">
					{editorial.relatedProducts.length > 0 && (
						<div className={styles.productsContainerDesktop}>
							<h3 className={styles.caption}>Related Products</h3>
							<ul>
								{[...editorial.relatedProducts].splice(0, 7).map(product => (
									<ProductItem key={product.id} product={product} />
								))}
							</ul>
						</div>
					)}
					<div className={styles.editorialContainerDesktop}>
						{editorial.relatedStories.length > 1 && (
							<div>
								<span />
								<h3 className={styles.caption}>Related Stories</h3>
								<ul>
									{[...editorial.relatedStories].splice(1, 3).map(editorial => (
										<EditorialItem key={editorial.id} editorial={editorial} />
									))}
								</ul>
							</div>
						)}
						{editorial.relatedStories.length > 0 && (
							<div>
								<span />
								<h3 className={styles.caption}>Next Story</h3>
								<EditorialItemBoldText
									key={editorial.relatedStories[0].id}
									editorial={editorial.relatedStories[0]}
								/>
							</div>
						)}
					</div>
				</Media>

				<Media lessThan="desktop">
					{editorial.relatedProducts.length > 0 && (
						<div className={styles.productsContainerMobile}>
							<h3 className={styles.caption}>Related Products</h3>
							<ul>
								{[...editorial.relatedProducts].splice(0, 4).map(product => (
									<ProductItem key={product.id} product={product} />
								))}
							</ul>
						</div>
					)}
					<div className={styles.editorialContainerMobile}>
						{editorial.relatedStories.length > 1 && (
							<div>
								<span />
								<h3 className={styles.caption}>Related Stories</h3>
								<ul>
									{[...editorial.relatedStories].splice(0, 2).map(editorial => (
										<EditorialItem key={editorial.id} editorial={editorial} />
									))}
								</ul>
							</div>
						)}
					</div>
					<div className={styles.editorialContainerMobile}>
						{editorial.relatedStories.length > 0 && (
							<div>
								<span />
								<h3 className={styles.caption}>Next Story</h3>
								<EditorialItemBoldText
									key={editorial.relatedStories[0].id}
									editorial={editorial.relatedStories[0]}
								/>
							</div>
						)}
					</div>
				</Media>
			</article>
		</Layout>
	);
};

const GET_EDITORIAL_DATA = gql`
	query editorialData($slug: String!) {
		${FOOTER_GQL}
		editorials(where: { slug: $slug }) {
			title
			slug
			appearsIn {
				slug
			}
			headline
			cover {
				alternativeText
				url
			}
			publishOverride
			published_at
			metaTags {
				name
				value
			}
			relatedProducts {
				${PRODUCT_ITEM_GQL}
			}
			relatedStories {
				${EDITORIAL_ITEM_GQL}
			}
			content {
				__typename
				... on ComponentEditorialSlide {
					id, caption
					image { url, alternativeText }
				}
				... on ComponentEditorialParagraph {
					id, Content
				}
				... on ComponentEditorialTwitterPost {
					id, tweetID
				}
				... on ComponentEditorialYoutubeVideo {
					id, videoID, title
				}
				... on ComponentEditorialSoundcloudTrack {
					id, url
				}
				... on ComponentEditorialInstagramPost {
					id, postURL, clientAccessToken
				}
			}
		}
	}
`;

type Paths = {
	editorial: string;
};

export async function getServerSideProps(
	context: GetServerSidePropsContext<Paths>,
): Promise<GetServerSidePropsResult<Props>> {
	try {
		const slug = context.params?.editorial || '';

		const { data } = await client.query<EditorialPageData>({
			query: GET_EDITORIAL_DATA,
			variables: { slug },
		});

		if (data.editorials.length !== 1) {
			return { notFound: true };
		}

		return { props: { editorial: data.editorials[0], sponsors: data.footer.sponsors } };
	} catch (error) {
		console.log(JSON.stringify(error));
		return { notFound: true };
	}
}

export default EditorialPage;
