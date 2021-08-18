const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
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
})
const Position = mongoose.model('positions', positionSchema);
module.exports = Position;
