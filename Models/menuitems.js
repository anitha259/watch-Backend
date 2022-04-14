const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemsSchema = new Schema({
        WatchId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('menuItems', menuItemsSchema, 'Menuitems');