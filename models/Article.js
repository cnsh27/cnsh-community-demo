const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const contentValidator = [
    validate({
        validator: 'isLength',
        arguments: [1, 300],
        message: 'content\'s length should be less than 300'
    }),

];

const ArticleModel = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: { type: String, required: true },
    content: { type: String, validate: contentValidator },
    by: mongoose.Types.ObjectId,
    coments: [
        {
            user: { _id: mongoose.Types.ObjectId, avartarURL: String, username: String },
            content: { type: String, default: '', maxLength: 500 },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    img: {
        cdnUri: String,
        files: []
    },
    createdAt: { type: Date, default: Date.now }
});


ArticleModel.methods = {
    addComent: function(data){
        this.coments.push(data);
    }
}

module.exports = mongoose.model('Article', ArticleModel);