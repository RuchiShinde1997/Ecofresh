/**
 * @author Ruchi Shinde
 */

const express = require("express");
const route = express.Router();
const Users = require("../models/usersModel");
const { validatePassword, getPassword, createSalt } = require("../controllers/login")

route.get("/allUsers", (req, res) => {
  Users.find({}).then(result => {
    res.send(result);
  }).catch(err => {
    res.status(500).send("Error while fetching the users.");
  });
});

route.post("/login", async (req, res) => {
  let email = req.body.email;
  email = email.trim();
  let password = req.body.password;
  console.log(req.body);
  console.log(email, password);
  await Users.findOne({ "email": email }).then(result => {
    console.log("Res: " + result);
    console.log("Salt: " + result.salt);
    if (validatePassword(result.salt, result.password, password)) {
      console.log("valid");
      res.send({ "success": true, "user": email, "userType": result.userType, "firstName": result.firstName, "lastName":result.lastName, "userId": result.userId });
    }
    else {
      res.status(401).send({ "success": false, "message": "Invalid credentials" });
    }
  }).catch(err => {
    console.log("Err: " + err);
    res.status(400).send({ "success": false, "user": email });
  });
});

route.post("/register", (req, res) => {
  let isRegistered = true;
  let password = req.body.password
  let newUser = new Users();
  let email = req.body.email;
  email = email.trim();
  newUser.email = email;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.phoneNumber = req.body.phoneNumber;
  newUser.userType = req.body.userType;
  newUser.salt = createSalt();
  newUser.password = getPassword(newUser.salt, password);
  // let email = req.body.email
  // let options = { upsert: true, new: true, setDefaultsOnInsert: true };
  // let query = {
  //   $set: {
  //     "email": req.body.email,
  //     "firstName": req.body.firstName,
  //     "lastName": req.body.lastName,
  //     "password": req.body.password,
  //     "userType": "customer"
  //   }
  // };
  // Users.find({ email: email }).then(result => {
  //   console.log("in result");
  //   console.log(result);
  //   if (result.length != 0) {
  //     res.status(400).send("User already exists");
  //   }
  //   else {
      newUser.save().then(savedResult => {
        res.status(201).send("User created");
      }).catch(saveErr => {
        res.status(400).send("User already exists");
      });
    // }

  // }).catch(err => {
  //   console.log("Failed to add user.");
  //   console.log("Is user registered? " + isRegistered)
  //   res.status(400).send("User cannot be created");
  // });

});

route.post("/updatePassword", (req, res) => {
  let email = req.body.email;
  email = email.trim();
  Users.findOne({
    "email": email
  }, (err, data) => {
    if (data) {
      let password = getPassword(data.salt, req.body.password);
      console.log("new password" + password);
      Users.updateOne({ "email": email }, { "password": password }, (error, result) => {
        if (result) {
          res.send({ "success": true, "message": "Password updated" });
        }
        else {
          res.status(400).send({ "success": false, "message": "Cannot update password. Please check your request." });
        }
      });
    }
    else {
      res.status(400).send({ "success": false, "message": "Cannot update password. Please check your request." });
    }
  });

})

route.get("/getUserDetails/:emailId", (req, res) => {
  let emailId = req.params.emailId;
  Users.findOne({ "email": emailId }).then(result => {
    console.log(result);
    res.send({
      "email": result.email,
      "firstName": result.firstName,
      "lastName": result.lastName,
      "userType": result.userType,
      "userId": result.userId
    })
  }).catch(err => {
    console.log(err)
    res.status(400).send({ "success": false });
  });
});

route.put("/updateUserDetails", (req, res)=>{
  let body = req.body;
  let email = body.email;
  Users.updateOne({email: email}, body).then(result => {
    res.send({success: true});
  }).catch(err =>{
    console.log(err);
    res.status(400).send({success: false});
  });
});


module.exports = route;
