import mongoose, { mongo } from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: {
        type: [orderItemSchema],
    },
    status: {
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING"
    }
},{timestamps: true})