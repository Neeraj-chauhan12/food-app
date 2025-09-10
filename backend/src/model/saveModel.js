const mongoose = require('mongoose');



const saveSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    foodItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('save', saveSchema);
