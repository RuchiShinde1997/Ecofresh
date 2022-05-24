/**
 * @author Kandarp Parikh
 */
 import {useParams} from 'react-router-dom'
 import { Button } from "@mui/material";
 import { FooterContainer } from "../../components/Footer/FooterContainer";
 // import Header from "../../components/Header/Header";
 import { MainContent, PageWrapper, BottomContain, Row_Complaint,
   Column_Complaint, Image, HeaderWrapper } from "../LandingPage/LandingPage.style";
 import ComplaintsImage from '../../assets/pictures/Complaints.jpg';
 import React, { useEffect, useState } from 'react'
 import axios from 'axios';
 import {useNavigate} from 'react-router-dom';
 import './Complaints.css';
 import Card from '@mui/material/Card';
 import TextField from "@mui/material/TextField";
 import Navbar from '../../components/Navbar/NavAdmin';
 import baseURL from '../../config';
 import AppButton from '../../components/Button/Button'
 import OffersImage from '../../assets/pictures/offers.jpg';
 function OfferDetails() {
    const navigate = useNavigate();
     const [offer,setComplaint] = useState('');
     const [id,setId] = useState('')
     const [imageUrl,setImageUrl] = useState('')
     const params = useParams();
     const [api_url,setAPIUrl] = useState(baseURL+'/offers/fetchByOfferId');
 
     useEffect(()=>
         {
             setId(params.id)
             const headers = {
                 'Access-Control-Allow-Origin': '*',
                 'Content-Type': 'application/json'
             }
 
                 axios.post(api_url,{headers: headers, data : {'offerCode': params.id}}).then((response) => {
                 setComplaint(response.data.data);});
         },[id])

const handleSubmit = (e) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
             axios.post(baseURL+"/offers/deleteoffer",{headers: headers, 
                 data : {
                     offerCode : params.id
                 }})
                 .then(result => {
                   alert("Offer Deleted")
                   navigate(`/adminalloffers`);
                })
                .catch(error => {
                  alert("ERROR " + JSON.stringify(error));
                });
            }   
         
 
   return     (
   <PageWrapper>
 <HeaderWrapper><Navbar /></HeaderWrapper>
       <MainContent>
         <img src={OffersImage} width="100%" height="300px"/>
         <h1 style={{width: 'fit-content',margin: '0 auto'}}>Complaint Details</h1>
           {true ? (
     <Card>
         <hr></hr>
         <Row_Complaint style={{height:"50px",alignItems:"center"}}>
             <Column_Complaint style={{ backgroundColor:'#1d3124',color:'white'}}>Offer Code : {offer.offerCode}</Column_Complaint>
             <Column_Complaint style={{ backgroundColor:'#1d3124',color:'white'}}>Minimum Billing Amount : {offer.minimumAmount}</Column_Complaint>
             <Column_Complaint style={{ backgroundColor:'#1d3124',color:'white'}}>Offer Discount : {offer.offerDiscount}</Column_Complaint>
         </Row_Complaint>
         <hr></hr>
         <Row_Complaint style={{height:"50px",alignItems:"center"}}>
             <Column_Complaint  style={{ backgroundColor:'#1d3124',color:'white'}}> Offer Description : </Column_Complaint>
             <Column_Complaint style={{ backgroundColor:'orange'}}>{offer.offerDescription}</Column_Complaint>
             <Column_Complaint></Column_Complaint>
         </Row_Complaint>

         <Row_Complaint style={{height:"50px",alignItems:"center"}}>
                 <Column_Complaint >
                 <AppButton color='secondary' on type='submit' style={{margin:"0 50%"}} onClick={handleSubmit}>Delete Offer</AppButton>
                     </Column_Complaint>

               </Row_Complaint>
         <hr></hr>
     </Card>
 )
 :null
           }
 <br></br>
       </MainContent>
 
       <BottomContain>
              <FooterContainer />
          </BottomContain>
 </PageWrapper>
 );
 }
 
 export default OfferDetails
 