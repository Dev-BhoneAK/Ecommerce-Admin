const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Category", categorySchema);