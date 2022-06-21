const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    info: {
        name: { type: String, required: true },
        sku: { type: String, required: true },
        categories: { type: Array, required: true },
        images: Array
    },
    detail: {
        model: String,
        brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
        description: { type: String, required: true },
        averageRating: { type: Number, required: true, default: 0 },
    },
    pricing: {
        basePrice: { type: Decimal, required: true},
        discount: Decimal,
    },
    totalStockCount: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    optionGroups: [
        {
            groupId: {type: mongoose.Schema.Types.ObjectId, ref: "OptionGroup"},
            options: [
                {
                    title: String,
                    price: Decimal,
                    stockCount: Number
                }
            ]
        }
    ]

}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);