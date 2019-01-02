import React from 'react';

import { Provider } from 'react-redux';
import App, { Container } from 'next/app';

import Head from 'next/head';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';

import HowItWorks from 'components/v2/How-It-Works';

import initStore from 'store';
import { routeActions } from 'store/route/actions';
import { profileActions } from 'store/profile/actions';
import { getConstants } from 'store/constants';
import { AppActions } from 'store/app/actions';
import { setStoreState as setFeedbackStoreState } from 'store/feedback/actions';

import getLayout from 'components/Layout';
import Offline from 'components/Offline';

import { roles } from 'util/navRoutes';

import getRouteData from 'util/app-helpers/route-data';
import { getCookie } from 'util/app-helpers/cookies';

import initSocket from 'util/app-helpers/socket';
import initFormToObject from 'util/app-helpers/form-to-object';

import handleRolesValidation from 'util/app-helpers/roles-validation';
import handleRouteChangeEvents from 'util/app-helpers/route-change-events';

import identifyUser from 'util/analytics/identify';
import 'react-dates/initialize';

class MyApp extends App {
	static async getInitialProps({ Component: { getInitialProps }, ctx }) {
		const {
			store, isServer, pathname, query = {},
		} = ctx;

		store.dispatch(setStoreState({ pathname, query, asPath }));

		const pageProps = getInitialProps ? await getInitialProps({ ...ctx }) : {};

		const pageProps = {
			pathname,
			query,
			...(initialProps || {}),
		};

		return { pageProps };
	}

	render() {
		const { Component, store, pageProps } = this.props;
		const { pathname, cookie } = pageProps || {};

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

export default withRedux(initStore)(MyApp);
