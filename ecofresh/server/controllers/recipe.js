/**
 * @author Mugdha Agharkar
 */

const Recipe = require("../models/recipeModel")

const getImageURL = (recipeName) => {
    Recipe.findOne({ "recipeName": recipeName }).then(recipeResult => {
        if (recipeResult.length) {
            s3 = recipeResult.s3URL;
            console.log("recipe img: " + s3);
            return s3;
        }
        else{
            return "";
        }
    }).catch(recipeFetchErr => {
        console.log("Cannot fetch image URL " + recipeFetchErr);
        return "";
    });
}

const getRatingsForRecipe = (recipeName) =>{
Recipe.find({recipeName:recipeName}).then(result => {
    return result.ratings;
}).catch(err => {
    return 0;
})
}

module.exports = { getImageURL, getRatingsForRecipe };