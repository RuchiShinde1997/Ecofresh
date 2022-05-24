/**
 * @author Vibhor Bhatnagar
 */

 const { request } = require("express");
const express = require("express");
 const route = express.Router();
 const UploadRecipe = require("../models/recipeModel")

route.get('/getAllRequests', async (req, res) => {
  let recipes = await UploadRecipe.find({
    "recipeStatus" : "Under review"
  });
  try {
    res.status(200).send(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching recipes.");
  }
})

route.get('/:requestId', async (req, res) => {
    const requestId = req.params.requestId;
    console.log(req.params.requestId);
    await UploadRecipe.findOne({
      "requestId": requestId
    }).then(
      result=>{
        let finalResult = result;
        console.log(finalResult);
        res.status(200).send(finalResult);
      }).catch(err=>{
        console.log("Err: " + err);
        res.status(400).send({ "message": "Recipe not found"});
    })
  });

  route.post('/updateApprove/:requestId', async(req,res) => {
      let reqId = req.params.requestId;
        UploadRecipe.updateOne({requestId : reqId}, {$set: {recipeStatus : "Approved"}})
        .then( result => res.status(200).send(result) )
          .catch(err => console.log("Error" + err))
  })

  route.post('/updateReject/:requestId', async(req,res) => {
    let reqId = req.params.requestId;
      UploadRecipe.updateOne({requestId : reqId}, {$set: {recipeStatus : "Rejected"}})
      .then( result => res.status(200).send(result) )
        .catch(err => console.log("Error" + err))
})

module.exports = route;