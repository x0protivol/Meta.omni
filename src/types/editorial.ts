import {
	Category,
	ComponentEditorialInstagramPost,
	ComponentEditorialParagraph,
	ComponentEditorialSlide,
	ComponentEditorialSoundcloudTrack,
	ComponentEditorialTwitterPost,
	ComponentEditorialYoutubeVideo,
	Editorial,
	UploadFile,
} from 'types';
import { ProductItemData } from './product';

export type EditorialItemData = Pick<
	Editorial,
	'title' | 'slug' | 'id' | 'published_at' | 'publishOverride' | 'headline'
> & {
	appearsIn: Pick<Category, 'slug' | 'title'>[];
} & { cover: Pick<UploadFile, 'url' | 'alternativeText'> };

type EditorialComponents =
	| Pick<ComponentEditorialParagraph, '__typename' | 'id' | 'Content'>
	| (Pick<ComponentEditorialSlide, '__typename' | 'caption' | 'id'> & {
			image: Pick<UploadFile, 'url' | 'alternativeText'>;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  })
	| Pick<ComponentEditorialTwitterPost, '__typename' | 'id' | 'tweetID'>
	| Pick<ComponentEditorialYoutubeVideo, 'videoID' | 'id' | 'title' | '__typename'>
	| Pick<ComponentEditorialSoundcloudTrack, 'id' | 'url' | '__typename'>
	| Pick<ComponentEditorialInstagramPost, 'clientAccessToken' | 'id' | 'postURL' | '__typename'>;

export type EditorialData = Pick<Editorial, 'title' | 'slug' | 'headline' | 'publishOverride' | 'published_at'> & {
	cover: Pick<UploadFile, 'url' | 'alternativeText'>;
} & {
	content: EditorialComponents[];
	relatedStories: EditorialItemData[];
	relatedProducts: ProductItemData[];
};

export const EDITORIAL_ITEM_GQL = `
	title
	slug
	id
	appearsIn {
		slug
		title
	}
	headline
	cover {
		url
		alternativeText
	}
	published_at
	publishOverride
`;
