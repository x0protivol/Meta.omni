import { ComponentStoreSponsor, UploadFile } from 'types';

export type Sponsor = Pick<ComponentStoreSponsor, 'title' | 'id' | 'websiteLink'> & { logo: Pick<UploadFile, 'url'> };

export const SPONSOR_GQL = `
	id
	title
	websiteLink
	logo {
		url
	}
`;
