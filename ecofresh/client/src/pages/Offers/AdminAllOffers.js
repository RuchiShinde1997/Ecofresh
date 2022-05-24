/**
 * @author Kandarp Parikh
 */
 import { Button } from "@mui/material";
 import {FooterContainer} from "../../components/Footer/FooterContainer";
 import Navbar from "../../components/Navbar/NavAdmin"
 import { FooterWrapper, HeaderWrapper, MainContent, PageWrapper, BottomContain, Row_Complaint,
   Column_Complaint, Image } from "../LandingPage/LandingPage.style";
 import landingPageImg from '../../assets/pictures/landing-page.png';
 import frenchOnion from '../../assets/pictures/french-onion.jpeg';
 import lasagnaSoup from '../../assets/pictures/lasagna-soup.webp';
 import React, { useEffect, useState } from 'react'
 import axios from 'axios';
 import {useNavigate} from 'react-router-dom';
 import './Complaints.css';
 import DropDown from "../../components/CommonComponents/DropDown"
 import TextField from "@mui/material/TextField";
 import Footer from "../../components/Footer/Footer";
 import baseURL from '../../config';
 import OffersImage from '../../assets/pictures/offers.jpg';
 
 function LandingPage(props) {
     const navigate = useNavigate();
     const [api_url,setAPIUrl] = useState(baseURL+'/offers/alloffers/');
     const [offers,setOffers] = useState([]);
     const [data, setData] = useState('');
     const [search,setSearch] = useState('');
     const complaintType = ["Delivery","Quality","Quantity"]
     const [complaintId,setComplaintId] = useState('')
     const [orderId,setOrderId] = useState('')
 
     useEffect(() => {
         const headers = {
             'Access-Control-Allow-Origin': '*',
             'Content-Type': 'application/json'
         }
        axios.get(api_url,{headers: headers}).then((response) => {
        setOffers(response.data)}); 
     },[]);

    // Navigates to Complaint Details page
    const handleClick = (id) => {
        navigate(`/offers/offerdetails/${id}`);
    }
    
   return (
     <PageWrapper>
 <HeaderWrapper><Navbar /></HeaderWrapper>
 
             <MainContent>
                 <img src={OffersImage} width="100%" height="300px"/>
                 <br></br>
                 {offers.length > 0 ? (offers.map((r) => (
                 <div >
                     {r.offerCode.length > 0 ? (
                <Row_Complaint style={{height:"1%" , color:'Black' , backgroundColor:'orange', padding:'30px'}}>
                    <Column_Complaint >Offer Code : {r.offerCode}</Column_Complaint>
                    <Column_Complaint >Minimum Billling Amount: {r.minimumAmount}</Column_Complaint>
                    <Column_Complaint >Offer Discount : {r.offerDiscount}%</Column_Complaint>
                    <Button variant="contained" style={{color: 'white', backgroundColor: "#1D3124",width:"250px"}} onClick={() => handleClick(r.offerCode)}>Offer Details</Button>
                </Row_Complaint>
                     ) : null}
              </div>
              
     )))
     :
     <div >
     </div>
                 }
 <br></br>
             </MainContent>
         <FooterContainer />
     </PageWrapper>
   );
 }
 
 export default LandingPage;