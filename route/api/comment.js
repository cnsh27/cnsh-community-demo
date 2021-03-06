const express = require('express');
const commentAPI = express.Router();
const ArticleModel = require('../../models/Article');
const UserModel = require('../../models/User');
const nanoid = require('nanoid');


commentAPI.post('/:id', (req, res) => {
    if(req.session != undefined) return res.status(403).json({
        error: 'NOT_LOGINED',
        code: 1
    });
    UserModel.findOne({gID: req.session.gID}, (err, user) => {
        if(err) return res.status(403).json({
            error: 'MONGOOSE_ERROR',
            code: 6
        });
        if(!user){
            return res.status(405).json({
                error: 'LOGIN_ERROR',
                code: 2
            });
        }

        ArticleModel.findById(req.query.articleID, (err, article) => {
            if(err) return res.status(403).json({
                error: 'MONGOOSE_ERROR',
                code: 6
            });
            if(!article){
                return res.status(405).json({
                    error: 'NONE_ARTICLE',
                    code: 3
                });
            }

            article.addComent({
                _id: nanoid(),
                user: {
                    _id: req.session.gID,
                    avartarURL: req.query.profile || 'default_avartar.png',
                    username: req.query.username
                },
                content: req.query.content || ''
            });
        });
    });
});

commentAPI.delete('/:id', (req, res) => {
    
});

module.exports = commentAPI;