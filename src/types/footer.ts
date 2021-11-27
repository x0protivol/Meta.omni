import { SPONSOR_GQL } from './sponsor';

export const FOOTER_GQL = `
	footer {
		sponsors {
			${SPONSOR_GQL}
		}
	}
`;
