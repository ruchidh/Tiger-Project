const express = require('express');
const compression = require('compression');

const { app, handle } = require('./app');
const routes = require('./routes');

app
	.prepare()
	.then(() => {
		const server = express();

		server.use(compression());

		server.use('/', routes);
		server.get('/*', (req, res) => handle(req, res));

		server.listen(process.env.PORT, err => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${process.env.PORT}`);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
