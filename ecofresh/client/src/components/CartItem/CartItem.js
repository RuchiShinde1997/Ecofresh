/**
 * @author Mugdha Agharkar
 */


import React from "react";
import { CartItemContainer, ImageContainer, ContentContainer, DeleteButtonContainer,
    RecipeName, RecipeContent } from './CartItem.style';
import placeHolderImage from '../../assets/pictures/placeholder.png';
import DeleteIcon from '@mui/icons-material/Delete';
import AppButton from "../Button/Button";
import axios from "axios";
import baseURL from "../../config";
 
 function CartItem(props) {
    const { price, qty, recipeName, recipeSchema } = props.item;
    const  deleteCartItem = (recipeName) => {
        const url = baseURL + "/cart/deleteItem/" + recipeName;
        axios.delete(url)
        .then(res => {
            console.log(res);
            if(res.status === 200) {
                props.updateCart();
            }
        })
    }


     return(
         <CartItemContainer>
            <ImageContainer>
                <img 
                    src={recipeSchema[0].s3URL === "" ? placeHolderImage : recipeSchema[0].s3URL} 
                    alt="Food!" 
                    height="120px" 
                    width="120px" 
                />
            </ImageContainer>
            <ContentContainer>
                <RecipeName>{recipeName}</RecipeName>
                <RecipeContent>Quantity: {qty}</RecipeContent>
                <RecipeContent>Cost Per Serving: {price}</RecipeContent>
            </ContentContainer>
            <DeleteButtonContainer>
                <AppButton color="secondary" style={{minWidth: 0, borderRadius: "100%"}} onClick={() => deleteCartItem(recipeName)}>
                    <DeleteIcon />
                </AppButton>
            </DeleteButtonContainer>
         </CartItemContainer>
     )
 }
 
 export default CartItem;