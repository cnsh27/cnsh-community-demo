const express = require('express');
const api = express.Router();
const ArticleModel = require('../../models/Article');
const UserModel = require('../../models/User');
const commentAPI = require('./comment');

const articleAPI = require('./article');
const commnetAPI = require('./comment');

api.use('/commnet', commentAPI);
api.use('/article', articleAPI);


module.exports = api;