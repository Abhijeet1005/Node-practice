import mongoose from 'mongoose'

const medRecordSchema = new mongoose.Schema({},{timestamps:true})

export const Record = mongoose.model('Record',medRecordSchema)