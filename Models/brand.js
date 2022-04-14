const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    watch_id: {
        type: Number
    }
})

module.exports = mongoose.model('brand', brandSchema, 'brand');