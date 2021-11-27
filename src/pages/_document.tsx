import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="<https://app.snipcart.com>" />
					<link rel="preconnect" href="<https://cdn.snipcart.com>" />
					<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
					<script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig.gaID}`} />
				</Head>
				<body>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${publicRuntimeConfig.gaID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>

					<div id="fb-root"></div>

					<div id="fb-customer-chat" className="fb-customerchat"></div>
					<script
						dangerouslySetInnerHTML={{
							__html: `
						var chatbox = document.getElementById('fb-customer-chat');
						chatbox.setAttribute("page_id", "2098515047041871");
						chatbox.setAttribute("attribution", "biz_inbox");
						
						window.fbAsyncInit = function() {
							FB.init({
								xfbml            : true,
								version          : 'v12.0'
							});
						};
						
						(function(d, s, id) {
							var js, fjs = d.getElementsByTagName(s)[0];
							if (d.getElementById(id)) return;
							js = d.createElement(s); js.id = id;
							js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
							fjs.parentNode.insertBefore(js, fjs);
						}(document, 'script', 'facebook-jssdk'));
					`,
						}}
					/>

					<div
						hidden
						id="snipcart"
						data-api-key="NzYyYzFjNDktZGM5MS00NDk4LTg0ZjUtZGI0MWMyNmE5ZjY1NjM3MDkwMTEzMjc5MDcwNDI4"
						data-config-modal-style="side"
					></div>

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
