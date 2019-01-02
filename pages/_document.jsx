import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import GlobalStyles from '../component/global-styles/GlobalStyles';

export default class CustomDocument extends Document {
	static getInitialProps({ pathname, renderPage, isServer }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();

		return {
			...page,
			styleTags,
			pathname,
			isServer,
		};
	}

	render() {
		return (
			<html lang="en">
				{/* prettier-ignore */}
				<Head>
					<meta charSet="UTF-8" />
					<meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

					{/* <link rel="icon" type="image/png" href="/static/meta/favicon-32x32.png?v=ngk4Qygweo" /> */}

					{/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-tippy@1.2.2/dist/tippy.css" />
					<link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" /> */}

					{/* necessary for overriding fonts. Need to find a better solution */}
					{/* <link rel="stylesheet" href="/static/admin2/css/antd.min.css" /> */}
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
					<GlobalStyles />
				</body>
			</html>
		);
	}
}
