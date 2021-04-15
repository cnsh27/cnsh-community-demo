const express = require('express');
const home = express.Router();
const middleware = require('../../config/middleware');
const ArticleModel = require('../../models/Article');


const a = {
    article: {
        profile: {
            avartarURL: 'default_avartar.png',
            username: 'chamwhy',
            roles: [
                {
                    class: 'adminrole',
                    name: '관리자'
                },
                {
                    class: 'teacherrole',
                    name: '선생님'
                }
            ],
            createdAt: Date.now()
        },
        content: '테스트 용으로 제작된 겁니다.\<strong>헬로우\</strong>'
    },
    comments: [
        {
            profile: {
                avartarURL: 'default_avartar.png',
                username: 'chamwhy'
            },
            comment: '테스트용 코멘트입니다. 안녕하세요',
            createdAt: Date.now()
        },
        {
            profile: {
                avartarURL: 'default_avartar.png',
                username: 'chamwhy'
            },
            comment: '테스트용 코멘트입니다. 안녕하세요',
            createdAt: Date.now()
        },
        {
            profile: {
                avartarURL: 'default_avartar.png',
                username: 'chamwhy'
            },
            comment: '테스트용 코멘트입니다. 안녕하세요',
            createdAt: Date.now()
        },
        {
            profile: {
                avartarURL: 'default_avartar.png',
                username: 'chamwhy'
            },
            comment: '테스트용 코멘트입니다. 안녕하세요',
            createdAt: Date.now()
        }
    ]
};

home.get('/', middleware.isLoggedIn, async (req, res) => {
    const articles = await ArticleModel.find();
    res.render('index', {
        isLogged: req.isLogged,
        user: req.session,
        articles: articles
    });
});

home.get('/login', middleware.isLoggedIn, (req, res)=>{
    res.render('login', {
        isLogged: req.isLogged
    });
});

module.exports = home;