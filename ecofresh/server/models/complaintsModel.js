/**
 * @author Kandarp Parikh
 */

 var mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 const complaints = new mongoose.Schema({
     complaintId: {
         type: Object,
         required: true
     },
     complaintStatus: {
         type: String,
         required: true
     },
     complaintType: {
         type: String,
         required: true
     },
     date: {
         type: String,
         required: false
     },
     description: {
         type: String,
         required: true
     },
     orderId: {
         type: String,
         required: true
     },
     photoUrl: {
         type: String,
     },
     reimbursementAmount: {
         type: String
     },
     resolutionMessage: {
         type: String
     },
     userEmail: {
        type: String
    }
 }); 
 
 
 module.exports = mongoose.model("complaints", complaints , "complaints");