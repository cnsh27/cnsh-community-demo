const express = require('express');
const router = express.Router();

const auth = require('./auth');
const home = require('./home');
const unknown = require('./unknown');
const api = require('./api');
const upload = require('./upload');
const classRoute = require('./class');

router.use('/', home);
router.use('/auth', auth);
router.use('/unknown', unknown);
router.use('/api', api);
router.use('/upload', upload);
router.use('/class', classRoute);

module.exports = router;