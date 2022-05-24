/**
 * @author Vibhor Bhatnagar
 */

 var mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 const uploadRecipeModel = new mongoose.Schema({
    recipeTitle: {
         type: String,
         required: true
     },
    costPerMeal: {
        type: Number, 
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        required: true
    },
     ingredients: {
         type: String,
         required: true
     },
     cookingTime: {
         type: String,
         required: true
     },
     portionSize: {
         type: String,
         required: true
     },
     description: {
         type: String,
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
     requestStatus: {
         type: String,
         default: "Under review"
     },

     ratings: {
        type: String,
        default: function() {
            const rating = "";
            return rating;
        }
    },
    submittedBy: {
        type: String,
    },
    s3URL: {
        type: String,
        default: function() {
            const URL = "";
            return URL;
        }
    }
 });

 module.exports = mongoose.model("uploadedrecipe",uploadRecipeModel, "uploadedrecipe");
 