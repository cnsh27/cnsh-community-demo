const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    grade: { type: Number, default: 1 },
    class: { type: Number, default: 1 },
    number: { type: Number, default: 1 },
    stNum: { type: Number, default: 1111 },
    articles: [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('User', UserModel);