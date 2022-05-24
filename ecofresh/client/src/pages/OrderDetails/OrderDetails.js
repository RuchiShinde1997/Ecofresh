import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import baseURL from "../../config";
import axios from "axios";
import {
    Container, ImageWrapper, ContentContainer, ContentWrapper, Heading,
    SubHeader, DividerWrapper, CardContainer, FlexContainer, RightContainer,
    RowKey, RowVal
} from "./OrderDetails.style";
import { Divider } from "@mui/material";
import Navbar from "../../components/Navbar/NavUser";
import { FooterContainer } from "../../components/Footer/FooterContainer";
import uploadRecipeBg from '../../assets/pictures/uploadRecipeBg.png'
import OrderRecipeItem from '../../components/OrderRecipeItem/OrderRecipeItem';
import AppButton from "../../components/Button/Button";

function OrderDetails() {
    const location = useLocation();
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        const getRecipeURL = baseURL + '/myOrders/getOrderDetails/' + location.state;
        axios.get(getRecipeURL)
            .then(res => {
                const data = res.data;
                console.log(data);
                setOrderDetails(data);
            })
    }, []);

    let navigate = useNavigate();
    console.log(orderDetails);

    const getRecipes = (order) => (
        order.recipes.map((recipe, index) => (
            <OrderRecipeItem recipe={recipe} s3URL={order.recipeSchema[index].s3URL} />
        ))
    )

    return (
        <Container>
            <Navbar />
            <ImageWrapper style={{ backgroundImage: `url(${uploadRecipeBg})` }}>
                <ContentWrapper>
                    <ContentContainer>
                        <Heading>Order Details</Heading>
                        {/* <SubHeader>Order # {orderDetails[0].orderId}</SubHeader> */}
                        <FlexContainer>
                        <CardContainer>
                            {
                                orderDetails.map(order => (
                                    <>
                                        {getRecipes(order)}
                                    </>
                                    
                                ))
                            }
                        </CardContainer>
                        <Divider orientation="vertical" flexItem/>
                        <RightContainer>
                        {
                                orderDetails.map(order => (
                                    <>
                                    <div style={{paddingTop: "40px", paddingLeft: "24px"}}>
                                    <FlexContainer className="right"> 
                                            <RowKey style={{fontSize: "24px"}}>Status:</RowKey>
                                            <RowVal style={{color: "green", fontSize: "24px"}}>{order.status}</ RowVal>
                                            
                                            </FlexContainer>
                                            <div style={{paddingTop: 40}}></div>
                                        <FlexContainer className="right"> 
                                            <RowKey style={{fontSize: "24px"}}>Final Cost:</RowKey>
                                            <RowVal style={{fontSize: "24px"}}>${Math.round(order.finalCost)}</ RowVal>
                                            
                                            </FlexContainer>
                                            <div style={{paddingTop: 40}}></div>
                                            <AppButton color="secondary" onClick={()=>{
                                                navigate("/myOrders")
                                            }}>Go back to My Orders</AppButton>
                                    </div>
                                    
                                        
                                    </>
                                    
                                ))
                            }
                        </RightContainer>
                        </FlexContainer>
                       
                        
                    </ContentContainer>
                    <Divider />
                </ContentWrapper>
            </ImageWrapper>
            <FooterContainer />
        </Container>
    )
}

export default OrderDetails;