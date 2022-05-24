var mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const pantryModel = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    supplierId:{
        type: String,
        required: true
    },
    Items:{
        type: Object,
        required: true
    }
}, { collection: 'Pantry' });

module.exports = mongoose.model("Pantry",pantryModel);
