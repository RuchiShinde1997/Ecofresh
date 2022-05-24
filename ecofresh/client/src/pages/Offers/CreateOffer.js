/**
 * @author Kandarp Parikh
 */
 import React, { Component,useEffect, useState,useRef } from 'react';
 import axios from 'axios';
 import { Button } from "@mui/material";
 import {FooterContainer} from "../../components/Footer/FooterContainer";
 import Navbar from "../../components/Navbar/NavAdmin"
 import { FooterWrapper, HeaderWrapper, MainContent, PageWrapper, BottomContain, Row_Complaint,
   Column_Complaint, Image } from "../LandingPage/LandingPage.style";
 import {useNavigate} from 'react-router-dom';
 import './Complaints.css';
 import TextField from "@mui/material/TextField";
 import Select from 'react-select'
 import OffersImage from '../../assets/pictures/offers.jpg';
 import Card from '@mui/material/Card';
 import baseURL from '../../config';
 import { UploadRecipeForm, Title, MainFormContainer, FormInputFields, FormLabel, FormInput, FormInputTextArea, Footer } from './Offers.style'
 import AppButton from '../../components/Button/Button'

 function LandingPage(props) {
   const currentOffers = []
   const [success,setSuccess] = useState("");
   const [url,setUrl] = useState("");
   const navigate = useNavigate();
   const [api_url,setAPIUrl] = useState(baseURL+'/complaints/allcomplaints/');
   const offers_url = baseURL+'/offers/alloffers';
   const [typeOfComplaint,setTypeOfComplaint] = useState("");
   const [data, setData] = useState('');
   const [search,setSearch] = useState('');
   const [complaint,setComplaint] = useState("");
   const [minimumAmountError,setMinimumAmountError] = useState("");
   const [offerDiscountError,setOfferDiscountError] = useState("");
   const [offerDescriptionError,setOfferDescriptionError] = useState("");
   const [offerCodeError,SetOfferCodeError] = useState("");
   const [minimumAmount,setMinimumAmount] = useState("");
   const [offerDiscount,setOfferDiscount] = useState("");
   const [offerDescription,setOfferDescription] = useState("");
   const [offerCode,SetOfferCode] = useState("");
   const orderIds = []
   const[formValues, setFormValues] = useState("");
   const [errormsg,setErrormsg] = useState("");
   const orderId_url= baseURL+'/complaints/allorders';
   const [complaintId,setComplaintId] = useState('')
   const [orderId,setOrderId] = useState('')
   const fileInput = useRef();
   const userId = localStorage.getItem("emailId")
   const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
}
axios.get(offers_url,{headers: headers}).then((response) => {
for (let i = 0; i < response.data.length; i++) {
 currentOffers.push(response.data[i].offerCode);
}});

   useEffect(() => {
   },[data]);
 
const handleSubmit = (e) => {
   // API call to backend to insert complaint data to database
   if(offerCodeError.length > 0 || minimumAmountError.length > 0 || offerDescriptionError.length >0 || offerDiscountError.length>0 || errormsg.length>0)
   {
       if(errormsg.length>0)
       {
            alert(errormsg);
       }
       else if(offerCode.length === 0 || offerDescription.length === 0 || minimumAmount.length === 0 || offerDiscount.length===0)
       {
            alert("Please fill all the fields");
       }
   }
   else{
    axios.post(baseURL+"/offers/addoffer",{headers: headers, 
        data : {
            offerCode : offerCode,
            minimumAmount: minimumAmount,
            offerDescription: offerDescription,
            offerDiscount: offerDiscount
        }})
        .then(result => {
          alert("Complain Submitted")
         window.location.reload();
       })
       .catch(error => {
         alert("ERROR " + JSON.stringify(error));
       });
   }   
}

  // This function validation for Terms and conditions text field
   const handleTerms = (e) =>{
     if(e.target.value.length < 15){
       setOfferDescriptionError("! Terms and conditions should be atleast 15 characters long");
       setErrormsg("Terms and conditions should be atleast 15 characters long");
     }
     else{
       setOfferDescriptionError("");
     }
     setOfferDescription(e.target.value);
   }

  // This function validation for Terms and conditions text field
  const handleOfferCode = (e) =>{
      
    if(e.target.value.length === 0){
      SetOfferCodeError("! Please enter Offer Code");
      setErrormsg("! Please Enter Offer Code");
    }
    else{
        for (let i = 0; i < currentOffers.length; i++) {
            if(currentOffers[i] === e.target.value)
            {
                SetOfferCodeError("! Offer Code already exists");
                setErrormsg(" ! Offer Code already exists");
            }
            else{
                SetOfferCodeError("");
                
            }
          }

    }
    SetOfferCode(e.target.value);
  }

  // This function validation for minimum amount
  const handleMinimumAmount = (e) =>{
    if(e.target.value.length === 0){
      setMinimumAmountError("! Minimum Amount field is blank");
      setErrormsg("Minimum Amount field is blank");
    }
    else if (/^[0-9\b]+$/.test(e.target.value) === false)
    {
        setMinimumAmountError("! Minimum Amount field should only contain numbers");
        setErrormsg("Minimum Amount field should only contain numbers");
    }
    else{
      setMinimumAmountError("");
      setErrormsg("");
    }
    setMinimumAmount(e.target.value);
  }

  // This function validation for minimum amount
  const handleDiscountPercentage = (e) =>{
    if(e.target.value.length === 0){
      setOfferDiscountError("! Discount percentage field is blank");
      setErrormsg("Discount percentage field is blank");
    }
    else if(e.target.value.length > 0){
        if (/^[0-9\b]+$/.test(e.target.value) === false)
        {
            setOfferDiscountError("! Discount percentage field should only contain numbers");
            setErrormsg("Discount percentage field should only contain numbers");
        }
        else if(e.target.value.length > 2)
        {
            setOfferDiscountError("! Discount percentage should be less than 100");
            setErrormsg("! Discount percentage should be less than 100");
        }
        else{
            setOfferDiscountError("");
        }
    }
    else{
      setOfferDiscountError("");
      
    }
    setOfferDiscount(e.target.value);
  }
 
     return (
       <PageWrapper>
         
       <HeaderWrapper><Navbar /></HeaderWrapper>
             <MainContent>
               <img src={OffersImage} width="100%" height="300px"/>

               <h1 style={{width: 'fit-content',margin: '0 auto'}}>Create New Offer</h1>
           <Card>
                   <hr></hr>

            <Row_Complaint style={{alignItems:"center", height:"200px"}}> 
                <Column_Complaint  style={{ backgroundColor:'orange',color:'white'}}> 
                    <FormInputFields>
                        <FormLabel htmlFor='OfferCode'>Offer Code</FormLabel>
                            <FormInput
                            type='text'
                            name='OfferCode'
                            placeholder='Enter Offer Code'
                            onBlur={handleOfferCode}
                            >
                            </FormInput>
                    </FormInputFields>
                </Column_Complaint>

                <Column_Complaint style={{backgroundColor:"orange"}}>
                    <div>
                        <FormInputFields>
                            <FormLabel htmlFor='Minimum Amount'>Minimum Amount</FormLabel>
                                <FormInput
                                type='text'
                                name='Minimum Amount'
                                key={'Minimum Amount'}
                                placeholder='Enter Minimum Amount of Total Bill'
                                onBlur={handleMinimumAmount}>
                                </FormInput>
                        </FormInputFields>
                    </div>
                    </Column_Complaint>

                <Column_Complaint style={{backgroundColor:"orange"}}>
                    <div>
                        <FormInputFields>
                            <FormLabel htmlFor='ingredients'>Discount Percentage(%)</FormLabel>
                                <FormInput
                                type='text'
                                name='ingredients'
                                key={'ingredients'}
                                placeholder='Enter Discount percentage to be applied on Bill'
                                onBlur = {handleDiscountPercentage}>
                                </FormInput>
                        </FormInputFields>
                    </div>
                </Column_Complaint>
            </Row_Complaint>
            {offerCodeError.length > 0 || minimumAmountError.length > 0 || offerDiscountError.length >0 ? (
                        <Row_Complaint style={{height:"50px",alignItems:"center"}}>
                             <Column_Complaint><p style={{color:"red"}}>{offerCodeError}</p></Column_Complaint>
                             <Column_Complaint><p style={{color:"red"}}>{minimumAmountError}</p></Column_Complaint>
                             <Column_Complaint><p style={{color:"red"}}>{offerDiscountError}</p></Column_Complaint>
                        </Row_Complaint>)
               : null}

            <h2 style={{width: 'fit-content',margin: '0 auto'}}>Enter Offer Terms and Conditions</h2>
            <Row_Complaint style={{height:"250px",alignItems:"center"}}>
                <Column_Complaint  style={{ backgroundColor:'#1d3124',color:'white'}}> 
                    <FormInputFields style={{width:"100%"}}>
                        <FormLabel htmlFor='description' style={{color:"white"}}>Terms and Conditions</FormLabel>
                            <FormInputTextArea style={{height: "200px",width:"100%"}}
                            name='description'
                            key={'description'}
                            placeholder='Enter Terms and Conditions'
                            onBlur={handleTerms}>
                            </FormInputTextArea>
                        </FormInputFields>
                
                </Column_Complaint>
        </Row_Complaint>
        {offerDescriptionError.length >0 ? (
                <Row_Complaint style={{height:"50px",alignItems:"center"}}>
                        <Column_Complaint></Column_Complaint>
                        <Column_Complaint><p style={{color:"red"}}>{offerDescriptionError}</p></Column_Complaint>
                        <Column_Complaint></Column_Complaint>
                </Row_Complaint>)
               : null}
               
               <Row_Complaint style={{height:"50px",alignItems:"center"}}>
                 <Column_Complaint >
                 <Button color='secondary' on type='submit' style={{margin:"0 50%"}} onClick={handleSubmit}>SUBMIT</Button>
                     </Column_Complaint>

               </Row_Complaint>
               <hr></hr>
           </Card>
           </MainContent>
              <FooterContainer />
 
           </PageWrapper>
     );
 
 }

 export default LandingPage;
 