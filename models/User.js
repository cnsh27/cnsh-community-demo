const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    gID: { type: String, required: true },
    name: { type: String, required: true },
    nickname: { type: String },
    isSchool: { type: Boolean, required: true },
    email: { type: String, required: true },
    stNum: {
        num: { type: Number },
        grade: Number,
        class: Number,
        number: Number
    },
    image: { type: String, default: 'profile_default' },
    articles: [mongoose.Types.ObjectId],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserModel);