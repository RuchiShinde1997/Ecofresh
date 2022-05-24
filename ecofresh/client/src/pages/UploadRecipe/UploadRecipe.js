/**
 * @author Vibhor Bhatnagar
 */

import React, { useState, useEffect } from 'react'
import { UploadRecipeForm, Title, MainFormContainer, FormInputFields, FormLabel, FormInput, FormInputUpload, FormInputTextArea, Footer, PageWrapper } from './UploadRecipe.style'
import Navbar from '../../components/Navbar/NavUser'
import { FooterContainer } from '../../components/Footer/FooterContainer'
import uploadRecipeImg from '../../assets/pictures/uploadRecipeBg.png'
import AppButton from '../../components/Button/Button'
import { Modal, Box, Typography } from '@mui/material'
import baseURL from '../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UploadRecipe() {

  const initialState = { recipeTitle:"", cuisine: "", mealType: "", ingredients:"", costPerMeal:"", description: "", pictureName: "default-upload.png"};
  const[formValues, setFormValues] = useState(initialState);
  const[errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [userId, setUserId] = useState(0);
  const [selectFile, setSelectFile] = useState(null);
  const navigate = useNavigate();
  const url = baseURL + '/uploadRecipe/requestForm';

  const handleChange = (e) => {
    const { name,value } = e.target;
    setFormValues({...formValues, 
        [name]: value
      }); 
  };

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
  }
  const handleModalClose = (e) => {
    setModalIsOpen(false);
    navigate('/uploadRecipeNavigation');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(formValues));
    setIsSubmit(true);
    if(Object.keys(errors).length === 0) {
      const formdata = new FormData();
      formdata.append("image", selectFile);
      formdata.append("submittedBy", localStorage.getItem('userId'));
      formdata.append("recipeName", formValues.recipeTitle);
      formdata.append("cuisine", formValues.cuisine);
      formdata.append("mealType", formValues.mealType);
      formdata.append("ingredients", formValues.ingredients);
      formdata.append("costPerMeal", formValues.costPerMeal);
      formdata.append("description", formValues.description);
      axios.post(url,formdata).then(
        res=> {
          setRequestId(res.data.requestId);
          console.log(requestId);
          setUserId(res.data.userId);
        }, (error) => {
          console.log(error);
        });
    }
  };

  useEffect( (e) => {
    if(Object.keys(errors).length === 0 && isSubmit) {
      setModalIsOpen(true);
    };
  }, [errors, isSubmit])

  const validateForm = (value) => {
    const errors = {}
    if(!value.recipeTitle.trim()) {
        errors.recipeTitle = "Recipe Title is mandatory";
    }
    if(!value.cuisine.trim()) {
      errors.cuisine = "Cuisine origin is mandatory";
    }
    if(!value.ingredients.trim()) {
        errors.ingredients = "Ingredients are mandatory";
    }
    if(!value.mealType.trim()) {
      errors.mealType = "Meal type is mandatory";
    }
    if(!value.costPerMeal.trim()) {
      errors.costPerMeal = "Cost per meal cannot be blank !";
  }
    if(!value.description.trim()){
      errors.description = "Description cannot be empty !";
    }
    return errors;
};

  return (
    <PageWrapper style={{backgroundImage: `url(${uploadRecipeImg})`}}>
   <Navbar />
   <Title>Upload a Recipe</Title>
   <MainFormContainer>
      <UploadRecipeForm method='POST ' onSubmit={handleSubmit}>

        <FormInputFields>
          <FormLabel htmlFor='recipeTitle'>Recipe Title</FormLabel>
          <FormInput
          type='text'
          name='recipeTitle'
          key={'recipeTitle'}
          placeholder='Enter recipe title'
          value={formValues.recipeTitle}
          onChange={handleChange}>
          </FormInput>
          <p>{errors.recipeTitle}</p>
        </FormInputFields>

        <FormInputFields>
          <FormLabel htmlFor='cuisine'>Cuisine</FormLabel>
          <FormInput
          type='cuisine'
          name='cuisine'
          key={'cuisine'}
          placeholder='Enter cuisine origin'
          value={formValues.cuisine}
          onChange={handleChange}>
          </FormInput>
          <p>{errors.cuisine}</p>
        </FormInputFields>

        <FormInputFields>
          <FormLabel htmlFor='mealType'>Meal Type</FormLabel>
          <FormInput
          type='mealType'
          name='mealType'
          key={'mealType'}
          placeholder='Enter meal type - Salads, Breakfast, Appetizers, Soups, Main Course'
          value={formValues.mealType}
          onChange={handleChange}>
          </FormInput>
          <p>{errors.mealType}</p>
        </FormInputFields>

        <FormInputFields>
          <FormLabel htmlFor='ingredients'>Ingredients</FormLabel>
          <FormInput
          type='text'
          name='ingredients'
          key={'ingredients'}
          placeholder='Enter ingredients'
          value={formValues.ingredients}
          onChange={handleChange}>
          </FormInput>
          <p>{errors.ingredients}</p>
        </FormInputFields>

        <FormInputFields>
          <FormLabel htmlFor='costPerMeal'>Cost per meal</FormLabel>
          <FormInput
          type='text'
          name='costPerMeal'
          key={'costPerMeal'}
          placeholder='Enter cost per meal'
          value={formValues.costPerMeal}
          onChange={handleChange}>
          </FormInput>
          <p>{errors.costPerMeal}</p>
        </FormInputFields>

        <FormInputFields>
          <FormLabel htmlFor='recipePicture'>Upload picture (optional)</FormLabel>
          <FormInputUpload
          type='file'
          name='recipePicture'
          key={'recipePicture'}
          onChange={handleFileChange}>
          </FormInputUpload>
        </FormInputFields>

        <FormInputFields>
          <FormLabel htmlFor='description'>Description</FormLabel>
          <FormInputTextArea
          name='description'
          key={'description'}
          placeholder='Enter description'
          value={formValues.description}
          onChange={handleChange}>
          </FormInputTextArea>
          <p>{errors.description}</p>
        </FormInputFields>
        <AppButton color='secondary' type='submit'>SUBMIT</AppButton>
      </UploadRecipeForm>
   </MainFormContainer>
    <Modal
      open={modalIsOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={{position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#1d3124',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,}}>
      <Typography id="modal-modal-title" variant="h6" component="h2" style={{color: "#fdad11", textAlign: 'center'}}>
        <p>Upload request submitted.</p>
        <p>Request Reference number: {requestId}</p>
      </Typography>
      <AppButton color='secondary' type='submit' onClick={handleModalClose} style={{marginLeft: "160px"}}>Go Back</AppButton>
    </Box>
    </Modal>
   <Footer><FooterContainer /></Footer>
   </PageWrapper>
  )
}

export default UploadRecipe