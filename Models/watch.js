const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const watchSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('watch', watchSchema, 'watch');