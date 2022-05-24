/**
 * @author Vibhor Bhatnagar
 */

import React , { useState, useEffect } from 'react'
import AppButton from '../../components/Button/Button'
import { PageWrapper, ImageContainer, Title, Row, Column, RowContainer, Text } from './UploadRecipeAdmin.style' 
import { Footer } from './UploadRecipe.style'
import adminHeaderImage from '../../assets/pictures/AdminHeader.png'
import { Modal,Box,Typography } from '@mui/material'
import Navbar from '../../components/Navbar/NavAdmin'
import { FooterContainer } from '../../components/Footer/FooterContainer'
import baseURL from '../../config';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UploadRecipeAdmin() {
const [isSubmit, setIsSubmit] = useState(false);
const [allRequests, setAllRequests] = useState([]);
const [isRequestId, setRequestId] = useState("");
const [isRecipeTitle, setRecipeTitle] = useState("");
const [isIngredients, setIngredients] = useState("");
const [isDescription, setDescription] = useState("");
const [modalIsOpen, setModalIsOpen] = useState(false);

const apiUrl = baseURL+'/adminRecipeRequests/getAllRequests';

const handleClick = (requestId) => {
  console.log(requestId);
  setIsSubmit(true);
  axios.get(baseURL + "/adminRecipeRequests/" + requestId)
    .then(res => {
      console.log(res.data.ingredients);
      setRequestId(res.data.requestId);
      setRecipeTitle(res.data.recipeName);
      setIngredients(res.data.ingredients);
      setDescription(res.data.description);
      setModalIsOpen(true);
    }).then(err => console.log(err));
  
}

const handleAcceptClick = (requestId) => {
  axios.post(baseURL + '/adminRecipeRequests/updateApprove/' + requestId)
  .then((data) => {
    console.log(data);
    setModalIsOpen(false);
    window.location.reload();
  }).then( err => console.log(err))
}

const handleRejectClick = (requestId) => {
  axios.post(baseURL + '/adminRecipeRequests/updateReject/' + requestId)
  .then((data) => {
    console.log(data);
    setModalIsOpen(false);
  }).then( err => console.log(err))
}

useEffect(() => {
    axios.get(apiUrl)
    .then(res => {
        const data = res.data;
        setAllRequests(data);
    }).then( err => console.log(err))
}, []);

  return (
    <PageWrapper>
      <Navbar />
      <ImageContainer>
        <img className="hero_img" src={adminHeaderImage} alt="hero"/>
      </ImageContainer>
      <Title>
        <text>View Requests</text>
      </Title>

      <Row className='headingRow' style={{fontSize: '30px', paddingBottom: '20px'}}>
        <RowContainer style={{backgroundColor: "#fff"}}>
        <Column>User ID</Column>
        <Column>Request ID</Column>
        <Column>Action</Column>
        </RowContainer>
      </Row>

      {allRequests.map((requests) => (
        <Row style={{fontSize: '25px', paddingBottom: '10px'}}>
        <RowContainer>
        <Column>{requests.submittedBy}</Column>
        <Column>{requests.requestId}</Column>
        <Column><AppButton color='secondary' type='submit' style={{color: "#000" ,width:"100px"}} onClick={() => handleClick(requests.requestId)}>Open Request</AppButton></Column>
        </RowContainer>
      </Row>
      ))}
    <div>
    <Modal
      open={modalIsOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={{position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 380,
        bgcolor: '#1d3124',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,}}>
    <Typography id="modal-modal-title" variant="h6" component="h2" style={{color: "#fdad11", textAlign: 'center', marginLeft: '40px'}}>
      <p style={{marginTop: "5px",fontSize: "32px", marginRight: '40px'}}>Request details</p>
      <p style={{textAlign: "left"}}>Recipe Title: <Text>{isRecipeTitle}</Text></p>
      <p style={{textAlign: "left"}}>Ingredients: <Text>{isIngredients}</Text></p>
      <p style={{textAlign: "left"}}>Description: <Text>{isDescription}</Text></p>
    </Typography>
    <AppButton type='submit' onClick={() => handleAcceptClick(isRequestId)} style={{backgroundColor: "#50AF00",color: "#fff", fontWeight: "600", marginLeft:"40px", width:"90px"}}>Approve</AppButton>
    <AppButton color='secondary' type='submit' onClick={() => setModalIsOpen(false)} style={{marginLeft: "20px", width:"90px"}}>Go Back</AppButton>
    <AppButton type='submit' onClick={() => handleRejectClick(isRequestId)} style={{backgroundColor: "red",color: "#fff", fontWeight: "600",marginLeft:"20px", width:"90px"}}>Reject</AppButton>
    </Box>
    </Modal>
    </div>
    <Footer style={{paddingTop: "50px"}}><FooterContainer /></Footer>
      
    </PageWrapper>
  )
}

export default UploadRecipeAdmin