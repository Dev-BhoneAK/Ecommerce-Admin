const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    orderItems: [
        {
            product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
            quantity: {type: String, required: true},
            price: {type: Double, required: true},
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    payment: {
        method: {
            type: String,
            required: true
        },
        result: {
            id: {type: String, required: true},
            email: {type: String, required: true},
            status: {type: String, required: true},
            update_time: {type: String, required: true},
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false
        },
        paidAt: {
            type: Date
        },
    },
    tracking: {
        status: String,
        deliveredAt: {type: Date},
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);