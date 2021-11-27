import 'cross-fetch/polyfill';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'nprogress/nprogress.css';

import '@fontsource/open-sans';
import '@fontsource/source-sans-pro';
import '@fontsource/raleway';

import Head from 'next/head';
import Router from 'next/router';
import Error from 'next/error';
import NProgress from 'nprogress';

import 'styles/reset.scss';

import React, { FC, ReactElement } from 'react';
import { AppProps } from 'next/app';
import { MediaContextProvider } from 'utils/responsive';
import * as ga from 'utils/analytics';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

Router.events.on('routeChangeComplete', ga.pageview);

const OmnifineryApp: FC<AppProps> = ({ pageProps, Component }: AppProps): ReactElement => {
	if (pageProps.error) {
		return <Error statusCode={pageProps.error.status} title={pageProps.error.message} />;
	}

	return (
		<MediaContextProvider>
			<Head>
				<title>meta.omni</title>
			</Head>
			<Component {...pageProps}></Component>
		</MediaContextProvider>
	);
};

export default OmnifineryApp;
