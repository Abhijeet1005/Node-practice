import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    orders: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Orders',
    }
},{timestamps: true})

export const User = mongoose.model('User',userSchema);