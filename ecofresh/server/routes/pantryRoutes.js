const express = require("express");
const route = express.Router();
const Pantry = require("../models/pantryModel");


route.get("/pantry",async(req,res)=>{
    try{
    let  pantry = await Pantry.find({});
    console.log(pantry);
    res.send(pantry);
    }catch(error){
        console.log(error);
        res.status(500).send("Error while fetching the pantry ");
    }
  });


  route.post("/add/:id", (req, res) => {
    let item = req.body.item;
    let quantity =req.params.id;
    
    try{
        Pantry.findOne({
          "Supplier_id": '10706'
        }, (err, data) => {
          if (data) {
            console.log(data)
            
            var colName = "Items."+item;
            console.log(colName);
            Pantry.updateOne({  "Supplier_id": "10706"},{ $set: { [colName] :[item, quantity]  }}, (error, result) => {
              if (result) {
                  console.log(result)
                res.send({ "success": true, "message": "Status updated" });
              }
              else {
                res.status(400).send({ "success": false, "message": "Cannot process request" });
              }
            });
          }
         
        });
    }catch{
        res.status(400).send({ "success": false, "message": "Cannot process request" });
    }
  
})


  module.exports = route;