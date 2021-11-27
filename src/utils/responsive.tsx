import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
	breakpoints: {
		mobile: 0,
		desktop: 992,
	},
});

export const mediaStyle = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
