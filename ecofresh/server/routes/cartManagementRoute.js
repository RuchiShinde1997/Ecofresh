/**
 * @author Mugdha Agharkar
 */

const express = require("express");
const route = express.Router();
const Cart = require("../models/cartModel");
const Recipe = require("../models/recipeModel");
const { getImageURL } = require("../controllers/recipe")

route.post("/addToCart", (req, res) => {
    let data = req.body;
    newCart = new Cart();
    newCart.recipeName = data.recipeName;
    newCart.price = data.price;
    newCart.qty = data.qty;
    newCart.userEmail = data.userEmail;

    newCart.save().then(result => {
        res.send("Success");
    }).catch(err => {
        console.log(err);
        res.status(400).send("Inavlid input");
    });
});

route.delete("/deleteItem/:recipeName", (req, res) => {
    let recipeName = req.params.recipeName;
    console.log(recipeName);
    if (recipeName != null) {
        Cart.deleteOne({ "recipeName": recipeName }).then(result => {
            console.log(result);
            res.status(200).send("Recipe deleted");
        }).catch(err => {
            res.status(400).send("Invalid request");
        });
    } else {
        res.status(400).send("Please pass a valid recipe name");
    }

});

route.delete("/delete/:email", (req, res) => {
    let email = req.params.email;
    console.log(email);
    if (email != null) {
        Cart.deleteMany({ "email": email }).then(result => {
            console.log(result);
            res.status(200).send("Cart is empty");
        }).catch(err => {
            res.status(400).send("Invalid request");
        });
    } else {
        res.status(400).send("Please pass a valid email");
    }

});

route.get("/getAllItemsInCart/:email", (req, res) => {
    let emailId = req.params.email;
    let responseList = [];
    let subtotal = 0;
    Cart.aggregate([{
        $match: { "userEmail": emailId }
    }, {
        $lookup: {
            from: 'recipe',
            localField: 'recipeName',
            foreignField: 'recipeName',
            as: 'recipeSchema',
            pipeline: [{
                $project: {
                    s3URL: 1
                }
            }]
        }
    }]).then(result => {
        // console.log(result);
        for (i in result) {
            let recipeObj = result[i];
            let recipeName = recipeObj.recipeName;
            console.log(recipeName);
            console.log(recipeObj);
            subtotal += (recipeObj.price * recipeObj.qty);
            console.log(subtotal);
            responseList.push(recipeObj);

        }
        let shipping = 5;
        let taxes = 5;
        const roundedSubTotal = Math.round(subtotal * 100) / 100;
        let finalCost = roundedSubTotal + ((roundedSubTotal * taxes) / 100) + shipping;
        // console.log("here")
        res.send({
            data: responseList,
            userEmail: emailId,
            subtotal: roundedSubTotal,
            taxes: Math.round((roundedSubTotal * taxes) / 100),
            shipping: shipping,
            finalCost: finalCost
        });

    }).catch(err => {
        res.status(400).send("could not fetch results");
    });
    // Cart.find({ "userEmail": emailId }).then(result => {
    //     let subtotal = 0;
    //     for (i in result) {
    //         let recipeObj = result[i];
    //         let recipeName = recipeObj.recipeName;
    //         console.log(recipeName);
    //         let imgURL = getImageURL(recipeName);
    //         recipeObj.s3 = imgURL;
    //         console.log("recipe img: " + imgURL);
    //         console.log(recipeObj);
    //         responseList.push(recipeObj);
    //         subtotal += (recipeObj.price * recipeObj.qty);
    //         console.log(subtotal);

    //     }
    //     let shipping = 5;
    //     let taxes = 5;
    //     let finalCost = subtotal + ((subtotal * taxes) / 100) + shipping;
    //     console.log("here")
    //     res.send({
    //         data: responseList,
    //         userEmail: emailId,
    //         subtotal: subtotal,
    //         taxes: taxes,
    //         shipping: shipping,
    //         finalCost: finalCost
    //     })
    // }).catch(err => {
    //     console.log("Cannot fetch recipes " + err);
    //     res.status(400).send("Failed to get cart items");
    // });
})


module.exports = route;