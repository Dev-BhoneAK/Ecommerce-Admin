const mongoose = require('mongoose');

const optionGroupSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('OptionGroup', optionGroupSchema);