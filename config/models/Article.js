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
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleModel);