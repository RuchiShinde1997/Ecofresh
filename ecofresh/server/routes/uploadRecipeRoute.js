/**
 * @author Vibhor Bhatnagar
 */

 const express = require("express");
 const route = express.Router();
 const UploadRecipe = require("../models/recipeModel")
 const multer = require('multer')
 const upload = multer ({ dest: 'uploads/'})
 const { uploadImage } = require('../controllers/uploadImgToS3')

route.get('/getAllRequests', async (req, res) => {
  let recipes = await UploadRecipe.find({});
  try {
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "Error while fetching recipes."});
  }
})

 route.post('/requestForm', upload.single('image'), async (req, res) => {
  const file = req.file;
  const result = await uploadImage(file);
  const imgName = result.Key;
  const filename = req.file['originalname'];
  let newRecipe = await new UploadRecipe();
  newRecipe.submittedBy = req.body.submittedBy;
  newRecipe.recipeName = req.body.recipeName;
  newRecipe.cuisine = req.body.cuisine;
  newRecipe.costPerMeal = req.body.costPerMeal;
  newRecipe.mealType = req.body.mealType;
  newRecipe.ingredients = req.body.ingredients;
  newRecipe.s3URL = "https://ecofreshbucket.s3.ca-central-1.amazonaws.com/" + imgName;
  newRecipe.description = req.body.description;
  console.log(newRecipe);
  newRecipe.save().then(result => {
    const reqId= result.requestId;
    res.status(200).send({
      "requestId" : reqId,
      "message" : "Recipe request submitted."
    });
  }).catch(err => {
    res.status(400).send({message: "Recipe upload request cannot be submitted" + err});
  });
});

route.get('/:requestId', async (req, res) => {
  const requestId = req.params.requestId;
  await UploadRecipe.findOne({
    "requestId": requestId
  }).then(
    result=>{
      let requestStatus = result.requestStatus;
      res.status(200).send(requestStatus);
    }).catch(err=>{
      console.log("Err: " + err);
      res.status(400).send({ "message": "Recipe not found"});
  })
});

  module.exports = route;