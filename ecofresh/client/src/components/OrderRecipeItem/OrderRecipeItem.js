/**
 * @author Mugdha Agharkar
 */


 import React from "react";
 import { CartItemContainer, ImageContainer, ContentContainer, DeleteButtonContainer,
     RecipeName, RecipeContent } from './OrderRecipeItem.style';
 import placeHolderImage from '../../assets/pictures/placeholder.png';
 import DeleteIcon from '@mui/icons-material/Delete';
 import AppButton from "../Button/Button";
 import axios from "axios";
 import baseURL from "../../config";
  
  function CartItem(props) {
     const { priceSummation, qty, recipeName } = props.recipe;
 
 
      return(
          <CartItemContainer>
             <ImageContainer>
                 <img 
                     src={props.s3URL === "" ? placeHolderImage : props.s3URL} 
                     alt="Food!" 
                     height="120px" 
                     width="120px" 
                 />
             </ImageContainer>
             <ContentContainer>
                 <RecipeName>{recipeName}</RecipeName>
                 <RecipeContent>Quantity: {qty}</RecipeContent>
                 <RecipeContent>Total Cost: {priceSummation}</RecipeContent>
             </ContentContainer>
             {/* <DeleteButtonContainer>
                 <AppButton color="secondary" style={{minWidth: 0, borderRadius: "100%"}} onClick={() => deleteCartItem(recipeName)}>
                     <DeleteIcon />
                 </AppButton>
             </DeleteButtonContainer> */}
          </CartItemContainer>
      )
  }
  
  export default CartItem;