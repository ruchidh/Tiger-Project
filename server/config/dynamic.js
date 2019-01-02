const { app } = require('../app');

const handleDynamic = (router, dynamicRoutes) => {
	dynamicRoutes.map((route) => {
		const { pathname, redirectTo, paramNames } = route;

		router.get(redirectTo, (req, res) => app.render(req, res, '/404', {}));

		router.get(pathname, (req, res) => {
			const actualPage = redirectTo;
			const query = { ...req.query };

			if (paramNames) {
				paramNames.map(param => (query[param] = req.params[param]));
			}

			return app.render(req, res, actualPage, query);
		});
	});
};

module.exports.handleDynamic = handleDynamic;
