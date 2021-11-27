import { UploadFile } from 'types';

export type LinkImageData = Pick<UploadFile, 'url' | 'alternativeText'>;

export const LINK_IMAGE_GQL = `
	{ url, alternativeText }
`;
