/**
 * @author Kandarp Parikh
 */

 var mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 const offers = new mongoose.Schema({
    offerCode: {
         type: String,
         required: true
     },
     minimumAmount: {
         type: String,
         required: true
     },
     offerDescription: {
         type: String,
         required: true
     },
     offerDiscount: {
         type: String,
         required: false
     }
 }); 
 
 
 module.exports = mongoose.model("offers", offers , "offers");