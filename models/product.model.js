
import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Product schema for mongoose
const productSchema = new Schema({
    bottleType: {
        type: String,
        required: true
    },
    itemCode: {
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

export default mongoose.model('Product', productSchema)

