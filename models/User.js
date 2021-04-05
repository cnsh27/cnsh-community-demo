const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, required: true },
    gID: { type: String, required: true },
    name: { type: String, required: true },
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