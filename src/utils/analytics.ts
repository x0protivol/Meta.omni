import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

// log the pageview with their URL
const pageview = (url: string): void => {
	(window as any).gtag('config', publicRuntimeConfig.gaID, {
		page_path: url,
	});
};

// log specific events happening.
const event = ({ action, params }: { action: unknown; params: unknown }): void => {
	(window as any).gtag('event', action, params);
};

export { pageview, event };
