/**
 * @author Kandarp Parikh
 */

 const offersModel = require("../models/offersModel");
 const Str = require('@supercharge/strings');


 /**
 * This code is derived from https://futurestud.io/tutorials/generate-a-random-string-in-node-js-or-javascript
 */

addOffer = (req) => {
    console.log(req.body)
    offersModel.create(
        {
            offerCode : req.body.data.offerCode,
            minimumAmount: req.body.data.minimumAmount,
            offerDescription: req.body.data.offerDescription,
            offerDiscount: req.body.data.offerDiscount
        })
}

module.exports = {
    addOffer: addOffer
  };