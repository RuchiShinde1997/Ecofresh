/**
 * @author Kandarp Parikh
 */

 const complaintsModel = require("../models/complaintsModel");
 const Str = require('@supercharge/strings');
const usersModel = require("../models/usersModel");


 /**
 * This code is derived from https://futurestud.io/tutorials/generate-a-random-string-in-node-js-or-javascript
 */
 
generateComplaintId = () =>{
    return Str.random(8)
    };

addResolution = (req) =>{
    var query = {'complaintId': req.body.data.complaintId};
    
    complaintsModel.findOneAndUpdate(query, {'reimbursementAmount':req.body.data.reimbursementAmount, 'resolutionMessage':req.body.data.resolutionMessage,'complaintStatus':'Closed'}, function(err, doc) {
        if (err) return "error";
        return 'Succesfully saved.';
    });
}

addCredits = (req) =>{
    var query = {'UserId': 'gimmemycoffee'};
    var currentCredit = usersModel.findOne(query)
    currentCredit = parseInt(currentCredit.credits) + req.body.data.reimbursementAmount;
    complaintsModel.findOneAndUpdate(query, {'credits':credits}, function(err, doc) {
        if (err) return "error";
        return 'Succesfully saved.';
        });
    
    complaintsModel.findOneAndUpdate(query, {'reimbursementAmount':req.body.data.reimbursementAmount, 'resolutionMessage':req.body.data.resolutionMessage,'complaintStatus':'Closed'}, function(err, doc) {
        if (err) return "error";
        return 'Succesfully saved.';
    });
}

addComplaint = (req) => {
    console.log(req.body)

    var datetime = new Date();
    complaintsModel.create(
        {
            complaintId : req.body.data.complaintId,
            complaintStatus: 'open',
            complaintType: req.body.data.complaintType,
            date: datetime,
            description: req.body.data.description,
            orderId: req.body.data.orderId,
            photoUrl: req.body.data.photoUrl,
            reimbursementAmount: '',
            resolutionMessage: '',
            userEmail: req.body.data.userEmail
        })
}

getComplaintByType = (req) => {
   
    return ("ok");
}

getComplaintById = (req) => {
    
    return ("ok");
}

module.exports = {
    addResolution: addResolution,
    generateComplaintId: generateComplaintId,
    addComplaint: addComplaint,
    getComplaintByType: getComplaintByType,
    addCredits: addCredits
  };