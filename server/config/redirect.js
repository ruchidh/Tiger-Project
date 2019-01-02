const url = require('url');

const handleRedirects = (router, redirectRoutes) => {
	redirectRoutes.map((route) => {
		const { pathname, redirectTo, paramNames } = route;

		router.get(pathname, (req, res) => {
			const actualPage = redirectTo;
			const query = { ...req.query };

			if (paramNames) {
				paramNames.map(param => (query[param] = req.params[param]));
			}

			return res.redirect(url.format({ pathname: actualPage, query }));
		});
	});
};

module.exports.handleRedirects = handleRedirects;
