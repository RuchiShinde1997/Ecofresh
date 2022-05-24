/**
 * @author Meha Desai
 */

const express = require("express");
const route = express.Router();
const Payment = require("../models/paymentModel")
const uuid = require("uuid");

route.get("/paymentDetails", async (req, res) => {
    try {
        let payments = await Payment.find({});
        res.status(200).send(payments);
        console.log(payments)
    } catch (error) {
        console.log(error);
        res.status(500).send("Error while fetching the payments.");
    }
});

route.post("/paymentDetails", (req, res) => {

    const { formValues: data } = req.body;
    newPayment = new Payment();
    newPayment.email = data.email;
    newPayment.address = data.address;
    newPayment.apartmentNumber = data.apartmentNumber;
    newPayment.city = data.city;
    newPayment.province = data.province;
    newPayment.postal = data.postal;
    newPayment.number = data.number;
    newPayment.instructions = data.instructions;
    // newPayment.paymentId = data.paymentId;
    // newPayment.paymentStatus = data.paymentStatus;

    newPayment.save().then(result => {
        res.send("Success");
    }).catch(err => {
        console.log(err);
        res.status(400).send("Invalid input");
    });
});



module.exports = route;
