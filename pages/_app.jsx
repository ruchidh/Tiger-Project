import React from 'react';

import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';

import initStore from '../store';
import { setStoreState } from '../store/route/actions';
import * as Progress from '../util/progress';

class MyApp extends App {
	static async getInitialProps({ Component: { getInitialProps }, ctx }) {
		const {
			store, pathname, query = {},
		} = ctx;

		store.dispatch(setStoreState({ pathname, query }));

		const pageProps = getInitialProps ? await getInitialProps({ ...ctx }) : {};

		return {
			pageProps: {
				...pageProps,
				pathname,
				query,
			},
		};
	}

	render() {
		const { Component, store, pageProps } = this.props;
		return (
			<Container>
				<Head>
					<title>Get Instant Freight Quotes, Book Shipments Online | Cogoport</title>
				</Head>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

Router.onRouteChangeStart = () => {
	Progress.start();
};

Router.onRouteChangeComplete = () => {
	Progress.stop();
};


export default withRedux(initStore)(MyApp);
