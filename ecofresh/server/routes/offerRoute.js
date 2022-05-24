/**
 * @author Kandarp Parikh
 */

const express = require("express");
const route = express.Router();
const offersModel = require("../models/offersModel");
const offers = require("../controllers/offers")

// Retrieve all offers
route.get("/alloffers", async (req, res) => {
  let offers = await offersModel.find();
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).send(offers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching the offers.");
  }
});

// Retrieve all offers
route.post("/deleteoffer", async (req, res) => {
  let offers = await offersModel.findOneAndDelete({ offerCode: req.body.data.offerCode });
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).send(offers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching the offers.");
  }
});

// API to insert new offer to database
route.post("/addoffer", async (req, res) => {
  try {
    console.log("addoffer called")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    offers.addOffer(req)
    res.status(200).send({ "message": "successfully created Offer" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching the offer.");
  }
});

// Get all offers based on offer Id
route.post("/fetchByOfferId", async (req, res) => {
  try {
    let data = await offersModel.findOne({ offerCode: req.body.data.offerCode });
    if (data.offerCode.length > 0) {
      res.status(200).send({ data });
    }
    else {
      res.status(200).send({ 'error': "Offer code does not exist" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).send({ 'error': "Offer code does not exist" });
  }
});



module.exports = route;

