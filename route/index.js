const express = require('express');
const router = express.Router();

const auth = require('./auth');
const home = require('./home');
const unknown = require('./unknown');

router.use('/', home);
router.use('/auth', auth);
router.use('/unknown', unknown);

module.exports = router;