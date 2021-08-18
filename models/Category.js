const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        ref: 'categories',
        type: mongoose.Schema.Types.ObjectId

    },
    user: {
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId

    }
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
