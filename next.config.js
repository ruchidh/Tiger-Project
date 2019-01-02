const { parsed: localEnv } = require('dotenv').config();
const withCSS = require('@zeit/next-css');

/* eslint-disable */
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
/* eslint-enable */

const { ANALYZE, ANALYZE_LOG } = process.env;


if (typeof require !== 'undefined') {
	require.extensions['.css'] = () => {};
}

module.exports = withCSS({
	assetPrefix: localEnv.prefix,
	webpack(config, { dev, isServer }) {
		const config2 = config;

		if (dev) {
			config2.devtool = 'cheap-module-source-map';
		}
		if (ANALYZE) {
			config2.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: 'server',
					analyzerPort: isServer ? 8888 : 8889,
					openAnalyzer: true,
				}),
			);
		}
		if (ANALYZE_LOG) {
			config2.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
		}

		config2.node = {
			fs: 'empty',
		};

		config2.plugins.push(
			new webpack.EnvironmentPlugin(localEnv),
			new CircularDependencyPlugin({
				exclude: /a\.js|node_modules/,
				failOnError: true,
				cwd: process.cwd(),
			}),
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		);
		return config2;
	},
});
