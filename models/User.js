const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    gID: { type: String, required: true },
    name: { type: Number, required: true },
    isStudent: { type: Boolean, required: true },
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