import mongoose from 'mongoose'

const docSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        default: 0
    },
    worksIn: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }]
},{timestamps:true})

export const Doctor = mongoose.model('Doctor',docSchema)