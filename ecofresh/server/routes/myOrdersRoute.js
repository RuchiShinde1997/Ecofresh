/**
 * @author Ruchi Shinde
 */
const express = require("express")
const orderModel = require("../models/orderModel")
const Recipes = require("../models/recipeModel")
const { getRatingsForRecipe } = require("../controllers/recipe");
const route = express.Router()

route.get("/test", (req, res) => {
    res.send("Hello");
});

route.get("/getAllOrdersForUser/:email", (req, res) => {
    let email = req.params.email
    orderModel.find(
        { "userId": email }
    ).then(result => {
        let responseList = [];
        for(iterator in result){
            let recipes = result[iterator].recipes
            let recipeNames = []
            for (i in recipes) {
                recipeNames.push(recipes[i].recipeName);
            }
            let responseObj = {
                "orderId": result[iterator].orderId,
                "items": recipeNames,
                "date": result[iterator].date,
                "status": result[iterator].status
            };
            responseList.push(responseObj);
        }
        console.log(result);
        res.status(200).send(responseList);
    }).catch(err => {
        console.log(err);
        res.status(400).send({ "success": false });
    });
});

route.get("/getOrderDetails/:orderId", (req, res) => {
    let orderId = req.params.orderId;
    orderModel.aggregate([{
        $match: { "orderId": orderId }
    }, {
        $lookup: {
            from: 'recipe',
            localField: 'recipes.recipeName',
            foreignField: 'recipeName',
            as: 'recipeSchema',
            pipeline: [{
                $project: {
                    s3URL: 1
                }
            }]
        }
    }]).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Error while getting data");
    });
});

route.post("/updateRatings", (req, res) => {
    let requestBody = req.body;
    let orderId = requestBody.orderId;
    let rating = requestBody.ratings;
    let recipeName = requestBody.recipeName;
    let existingRating = getRatingsForRecipe(recipeName);
    let avgRating = (rating + existingRating) / 2;
    let successOrdersRatingUpdate = false;
    let successRecipeRatingUpdate = false;
    orderModel.updateOne({ orderId: orderId }, { ratings: rating }).then(result => {
        successOrdersRatingUpdate = true;
    }).catch(err => {
        console.log(err);
        successOrdersRatingUpdate = false;
    });

    Recipes.updateOne({ recipeName: recipeName }, { ratings: avgRating }).then(result => {
        successRecipeRatingUpdate = true
    }).catch(err => {
        console.log(err);
        successRecipeRatingUpdate = false;
    });

    if (successOrdersRatingUpdate && successRecipeRatingUpdate) {
        res.send({ "success": true });
    }
    else {
        res.status(400).send({ "success": false });
    }
});

route.post("/saveOrder", (req, res) => {
    let requestBody = req.body;
    let newOrder = new orderModel();
    let data = requestBody.data;
    let newDataArray = [];
    for (index in data) {
        console.log(data[index])
        let recipeObj = {
            recipeName: data[index].recipeName,
            pricePerServing: data[index].price,
            priceSummation: data[index].price * data[index].qty,
            qty: data[index].qty
        };
        newDataArray.push(recipeObj);
    }
    newOrder.recipes = newDataArray;
    newOrder.status = requestBody.status;
    newOrder.subtotal = requestBody.subtotal;
    newOrder.taxes = requestBody.taxes;
    newOrder.finalCost = requestBody.finalCost;
    newOrder.userId = requestBody.userId;
    newOrder.save().then(result => {
        res.send("Inserted");
    }).catch(err => {
        console.log(err);
        res.status(400).send("Error while saving the order");
    });
    requestBody.userId
});

module.exports = route