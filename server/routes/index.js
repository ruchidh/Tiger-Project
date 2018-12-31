const express = require('express');

const router = express.Router();

const loginRoutes = require('./login');

router.use('/login', loginRoutes);

module.exports = router;
