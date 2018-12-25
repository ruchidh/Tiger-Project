import React from 'react';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords, author, url }) => (
	<>
		<meta
			name="viewport"
			key="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>

		<meta key="title" name="title" content={title || ''} />
		<meta key="description" name="description" content={description || ''} />
		<meta key="keywords" name="keywords" content={keywords || ''} />

		<meta key="author" name="author" content={author || ''} />

		<meta key="og:title" name="og:title" content={title || ''} />
		<meta key="og:description" name="og:description" content={description || ''} />

		<meta key="og:url" property="og:url" content={url || ''} />

		<meta key="twitter:site" name="twitter:site" content={url || ''} />
		<meta key="twitter:card" name="twitter:card" content="summary_large_image" />

		<link
			rel="apple-touch-icon"
			sizes="76x76"
			href="/static/app/meta/apple-touch-icon.png?v=ngk4Qygweo"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/static/app/meta/favicon-32x32.png?v=ngk4Qygweo"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/static/app/meta/favicon-16x16.png?v=ngk4Qygweo"
		/>
		<link
			rel="mask-icon"
			href="/static/app/meta/safari-pinned-tab.svg?v=ngk4Qygweo"
			color="#292929"
		/>
		<link rel="shortcut icon" href="/static/app/meta/favicon.ico?v=ngk4Qygweo" />

		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="theme-color" content="#ffffff" />
	</>
);

Meta.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	keywords: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default Meta;
