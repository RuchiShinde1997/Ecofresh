/**
 * @author Mugdha Agharkar
 */

 var mongoose = require('mongoose');
 const crypto = require('crypto');
 const Schema = mongoose.Schema;
 
 const Recipe = new mongoose.Schema({
     costPerMeal: {
         type: Number, 
         required: true
     },
     cuisine: {
         type: String,
         required: true
     },
     description: {
         type: String,
         required: true
     },
     ingredients: {
         type: String,
         required: true
     },
     mealType: {
         type: String,
         required: true
     },
     ratings: {
         type: Number,
         default: 0,
         required: true
     },
     recipeId: {
        type: Number,
        default: function () {
           return Math.floor(Math.random() * 1234) + 10000;
       },
       index: { unique: true }
     },
     requestId: {
        type: String,
        default: function () {
            const id =  (Math.floor(Math.random() * 12345) + 10000).toString();
            return id;
        },
        index: { unique: true }
    },
     recipeName: {
         type: String,
         required: true
     },
     submittedBy: {
         type: String
     },
     s3URL: {
         type: String
     },
     recipeStatus:{
         type: String,
         default: "Under review"
     }
 });
 

 
 module.exports = mongoose.model("Recipe", Recipe, "recipe");