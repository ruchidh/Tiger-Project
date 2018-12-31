const express = require('express');

const router = express.Router();

const { app } = require('../app');

router.get('*', (req, res) => app.render(req, res, '/login', { ...(req.query || {}) }));

module.exports = router;
