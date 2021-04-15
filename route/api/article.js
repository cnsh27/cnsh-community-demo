const express = require('express');
const articleAPI = express.Router();
const ArticleModel = require('../../models/Article');
const UserModel = require('../../models/User');
const multer = require('multer');
const Article = require('../../models/Article');
const upload = multer({ dest: 'uploads/imgs/'});

articleAPI.post('/create/:type', async (req, res) => {
    if(typeof req.body.content != "string" || req.body.content == ''){
        return res.redirect('/');
    }
    const newArticle = new ArticleModel({
        content: req.body.content,
        by: await UserModel.findById(req.session._id),
        coments: []
    });
    await newArticle.save();
    return res.redirect('/' + req.params.type);
});

articleAPI.post('/update/:id', (req, res) => {
    ArticleModel.findById(req.params.id, async (err, article) => {
        if(err) throw err;
        article.content = req.body.content;
        await article.save();
        return res.redirect('/'+req.body.articleType);
    })
});

articleAPI.delete('/:id', (req, res) => {
    ArticleModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) throw err;
        res.json(500).redirect('/' + req.body.articleType);
    })
});

module.exports = articleAPI;