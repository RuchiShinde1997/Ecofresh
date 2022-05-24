/**
 * @author Meha Desai
 */

require('dotenv').config()

const { Router } = require("express");
const express = require("express");
const Payment = require("../models/paymentModel");

const secretKey = process.env.STRIPE_PRIVATE_KEY

const app = express.Router();

const stripe = require("stripe")(secretKey);
// const finalCost = localStorage.getItem("cartItems").finalCost;


app.use(express.static("public"));
app.use(express.json());

// const calculateOrderAmount = (items) => {

//     return 1400;
// };


/**
 *
 * This code is derived from https://stripe.com/docs/payments/accept-a-payment
 */

app.get("/payment", async (req, res) => {
    try {
        let payments = await Payment.find({});
        res.status(200).send(payments);
        console.log(payments)
    } catch (error) {
        console.log(error);
        res.status(500).send("Error while fetching the payments.");
    }
});

app.post("/payment", async (req, res) => {
    try {
        const { finalCost } = req.body;
        console.log("HELLO::::::", finalCost)

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(finalCost) * 100,
            currency: "cad",
            payment_method_types: ['card'],
            // automatic_payment_methods: {
            //     enabled: true,
            // },
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Server error"
        });
    }
});



module.exports = app;