/**
 * @author Meha Desai
 */

import React from 'react'
import Navbar from "../../components/Navbar/NavUser";
import {
    HeaderWrapper,
    MainContent,
    PageWrapper,
    BottomContainer,
    Row,
    Column
} from "./Details.style";
import deliveryMan from "../../assets/pictures/delivery-man.jpeg";
import { FooterContainer } from "../../components/Footer/FooterContainer";
import { Box, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Typography } from 'antd';
import AppButton from "../../components/Button/Button";
import axios from 'axios';
import baseURL from '../../config';
import CartItem from "../../components/CartItem/CartItem";


const { Title } = Typography;

export default function Details() {
    let email = localStorage.getItem("emailId");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [code, setCode] = useState("");
    const [error, setError] = useState(code);
    const [offers, setOffers] = useState([]);
    const finalCost = JSON.parse(localStorage.getItem("cartItems")).finalCost;
    const [total, setTotal] = useState(finalCost);


    const navigate = useNavigate();
    const { state } = useLocation()
    const [api_url, setApiUrl] = useState(baseURL + '/api/paymentDetails');
    const [APIUrl, setAPIUrl] = useState(baseURL + '/offers/alloffers');

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    useEffect(() => {


        getOffersAPI();

        setFormValues(state?.formValues)
        axios.get(api_url)
            .then(res => {
                const data = res.data;

            })

    }, []);

    const getOffersAPI = () => {
        axios.get(APIUrl)
            .then(res => {
                const data = res.data;
                setOffers(data);

            })
    }

    const handleChange = (e) => {
        // const name = e.target.name;
        const value = e.target.value;
        setCode(value);
    }

    const handleClick = (e) => {
        e.preventDefault();

        setIsSubmit(true);
        const filterCode = offers.filter(offer => offer.offerCode === code)

        if (filterCode.length > 0 && parseFloat(filterCode[0].minimumAmount) <= total) {

            console.log(filterCode)
            console.log("valid")

            const totalCost = total - parseFloat(filterCode[0].offerDiscount);
            setTotal(totalCost);

        } else {

            console.log("Invalid")

        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        navigate("/payment", {
            state: { formValues: state?.formValues }
        })

    };

    console.log(offers)

    return (
        <PageWrapper>
            <HeaderWrapper>
                <Navbar />
            </HeaderWrapper>

            <BottomContainer>
                <MainContent>
                    <img src={deliveryMan} width="100%" height="310px" />
                </MainContent>

                <Paper elevation={3}
                    sx={{
                        width: "50%",
                        marginTop: "auto",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }} >
                    <Box textAlign="left"

                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "90%",
                            justifyContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "50px",
                            marginBottom: "50px"
                        }}>
                        <Box>
                            <Box textAlign="center" sx={{
                                marginBottom: "50px",
                                marginTop: "30px"
                            }}>
                                <Title level={1} className="title">
                                    Delivery Details
                                </Title>
                            </Box>
                            <Row>
                                <Column>
                                    <strong> User ID: </strong>
                                </Column>
                                <Column>
                                    {email}
                                </Column>
                            </Row> <hr />
                            <Row>
                                <Column>
                                    <strong> Delivery Address: </strong>
                                </Column>
                                <Column>
                                    {state?.formValues.apartmentNumber} - {state?.formValues.address}, {state?.formValues.city}, {state?.formValues.province}, {state?.formValues.postal}
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <strong> Instructions for Delivery: </strong>
                                </Column>
                                <Column>
                                    {state?.formValues.instructions}
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <strong> Estimate Delivery Time: </strong>
                                </Column>
                                <Column>
                                    60 Minutes
                                </Column>
                            </Row> <hr />
                            <Row>
                                <Column>
                                    <strong> Your Orders: </strong>
                                </Column>
                                <Column>
                                    {
                                        cartItems?.data?.map((item, key) => (
                                            <div key={key}>{key + 1}. {item.recipeName}</div>
                                        ))
                                    }
                                </Column>
                            </Row> <hr />
                            <Row>
                                <TextField
                                    width="50%"
                                    id="outlined-required"
                                    name="promo"
                                    label=" Have Promocode ?"
                                    placeholder="Enter Promocode"
                                    margin="normal"
                                    value={code}
                                    onChange={handleChange}


                                />
                                <Box sx={{
                                    marginBottom: "10px",
                                    marginTop: "20px",
                                    marginLeft: "50px"
                                }}>
                                    <AppButton color="secondary"
                                        onClick={handleClick}>
                                        Apply
                                    </AppButton>
                                </Box>

                            </Row> <hr />
                            <Row>
                                <Column>
                                    <strong> Subtotal: </strong>
                                </Column>
                                <Column>
                                    CAD {parseFloat(total).toFixed(2)}

                                </Column>
                            </Row>
                        </Box>
                        <Box textAlign="center" sx={{
                            marginBottom: "50px",
                            marginTop: "30px"
                        }}>
                            <AppButton color="secondary"
                                onClick={handleSubmit} >
                                Pay Now
                            </AppButton>
                        </Box>
                    </Box>
                </Paper>
                <FooterContainer />
            </BottomContainer>

        </PageWrapper>
    )
}
