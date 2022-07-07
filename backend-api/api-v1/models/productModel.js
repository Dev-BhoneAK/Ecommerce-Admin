const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    info: {
        name: { type: String, required: true },
        sku: { type: String, required: true },
        category: { type: String, required: true },
        images: Array
    },
    detail: {
        model: String,
        brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand"},
        description: { type: String, required: true },
        averageRating: { type: Number, required: true, default: 0 },
    },
    pricing: {
        basePrice: { type: mongoose.Decimal128, required: true},
        discount: mongoose.Decimal128,
    },
    totalStockCount: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    optionGroups: [
        {
            groupId: {type: mongoose.Schema.Types.ObjectId, ref: "OptionGroup"},
            options: [
                {
                    title: String,
                    price: mongoose.Decimal128,
                    stockCount: Number
                }
            ]
        }
    ]

}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);