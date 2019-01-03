const { handle } = require('../app');

module.exports.prefix = (req, res, next) => {
	if (req.originalUrl.indexOf('app/_next') > -1) {
		req.url = req.originalUrl.replace('app/_next', '_next');
		handle(req, res);
	} else {
		next();
	}
};
