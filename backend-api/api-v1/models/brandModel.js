const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Brand', brandSchema);