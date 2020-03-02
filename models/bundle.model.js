import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Bundle schema for mongoose
const bundleSchema = new Schema({
    bundle: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    }
})

export default mongoose.model('Bundle', bundleSchema)
