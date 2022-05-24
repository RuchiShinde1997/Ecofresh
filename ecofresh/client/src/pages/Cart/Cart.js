/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @author Mugdha Agharkar
 */

import React, { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/NavUser'
import { FooterContainer } from '../../components/Footer/FooterContainer'
import {
    Container, ImageWrapper, Heading, CartContainer, CartItems, PaymentInfo,
    Row, RowItem, ContentContainer, ContentWrapper, EmptyCart, FlexContainer, DividerWrapper,
    HorizontalDividerWrapper, ButtonWrapper,
} from './Cart.style';
import baseURL from "../../config";
import axios from "axios";
import uploadRecipeBg from '../../assets/pictures/uploadRecipeBg.png'
import AppButton from "../../components/Button/Button";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { Divider } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function Cart() {
    let email = localStorage.getItem("emailId");
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation()

    useEffect(() => {
        getRecipeAPI();
    }, []);

    const getRecipeAPI = () => {
        console.log(state)
        const getRecipeURL = baseURL + '/cart/getAllItemsInCart/' + email;
        axios.get(getRecipeURL)
            .then(res => {
                const data = res.data;
                setCartItems(data);
                localStorage.setItem("cartItems", JSON.stringify(data))
            })
    }

    const handleCartUpdate = () => {
        setTimeout(getRecipeAPI(), 1000);

    }

    const { data, finalCost, shipping, subtotal, taxes } = cartItems;

    const navigateToCheckout = () => {
        navigate('/checkout', { state: cartItems });
    }

    return (
        <Container>
            <Navbar />
            <ImageWrapper style={{ backgroundImage: `url(${uploadRecipeBg})` }}>
                <ContentWrapper>
                    <ContentContainer>
                        {
                            data?.length > 0 ? (
                                <>
                                    <Heading>Your shopping cart</Heading>
                                    <CartContainer>
                                        <CartItems>
                                            {
                                                data.map(item => (
                                                    <CartItem item={item} updateCart={handleCartUpdate} />
                                                ))
                                            }
                                        </CartItems>
                                        <DividerWrapper>
                                            <Divider orientation="vertical" className="vertical" />
                                        </DividerWrapper>
                                        <FlexContainer>
                                            <PaymentInfo>
                                                <HorizontalDividerWrapper>
                                                    <Divider />
                                                </HorizontalDividerWrapper>
                                                <Row>
                                                    <RowItem>Sub-total</RowItem>
                                                    <RowItem className="value">${subtotal}</RowItem>
                                                </Row>
                                                <Row>
                                                    <RowItem>Shipping</RowItem>
                                                    <RowItem className="value">${shipping}</RowItem>
                                                </Row>
                                                <Row className="taxes">
                                                    <RowItem>Taxes (5%)</RowItem>
                                                    <RowItem className="value">${Math.round((taxes + Number.EPSILON) * 100) / 100}</RowItem>
                                                </Row>
                                                <Divider />
                                                <Row className="final">
                                                    <RowItem>Final Cost</RowItem>
                                                    <RowItem className="value">${Math.round((finalCost + Number.EPSILON) * 100) / 100}</RowItem>
                                                </Row>
                                            </PaymentInfo>
                                            <ButtonWrapper>
                                                <AppButton color="secondary" style={{ marginTop: 'auto' }} onClick={navigateToCheckout}>
                                                    Checkout And Pay
                                                </AppButton>
                                            </ButtonWrapper>
                                        </FlexContainer>

                                    </CartContainer>
                                </>
                            ) :
                                <EmptyCart>Your cart looks empty. <Link to="/home">Click here</Link> to start ordering! </EmptyCart>
                        }

                    </ContentContainer>
                </ContentWrapper>
            </ImageWrapper>
            <FooterContainer />
        </Container>
    )
}

export default Cart;