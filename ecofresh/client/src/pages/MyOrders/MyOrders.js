import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container, ContentContainer, ContentWrapper, ImageWrapper, Heading, EmptyOrdersList,
    OrderWrapper, OrderRow, OrderContent, Key, Value } from './MyOrders.style';
import Navbar from '../../components/Navbar/NavUser';
import { FooterContainer } from '../../components/Footer/FooterContainer';
import uploadRecipeBg from '../../assets/pictures/uploadRecipeBg.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../config';
import OrderList from '../../components/OrderList/OrderList';
import { useNavigate } from 'react-router-dom';
import AppButton from '../../components/Button/Button';


const MyOrders = () => {
    let [orderData, setOrderData] = useState([]);
    const navigate = useNavigate();
    let email = localStorage.getItem("emailId");
    let url = baseURL+"/myOrders/getAllOrdersForUser/"+email;
    let data = [];

    useEffect(() => {
        axios.get(url).then(res => {
            data = res.data;
            console.log(data);
            setOrderData(data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const openOrderDetails = (id) => {
        console.log(id);
        navigate('/orderDetails', {state: id});
    }

    const getDate = (date) => {
        const sysDate = new Date(date);
        const dateString = sysDate.getMonth().toString() + "/" + sysDate.getDate().toString() + "/" + 
            sysDate.getFullYear().toString();
        return dateString;
    }

    const getItems = (items) => {
        let text = "";
        items.map(item => {
            let comma = ",";
            if(item === items[items.length - 1]){
                comma = "";
            }
           text += item + comma;
        })
        return text;
    }


    return (
        <Container>
            <Navbar />
            <ImageWrapper style={{ backgroundImage: `url(${uploadRecipeBg})` }}>
            <ContentWrapper>
                    <ContentContainer>
                        {
                            orderData?.length > 0 ? (
                                <>
                                   <Heading>My Orders</Heading>
                                    {
                                    orderData.map(data =>(
                                        <OrderWrapper>
                                            <table cellPadding={"10"} style={{tableLayout:"fixed",  width:"90%"}}>
                                                <tr>
                                                    <Key>Order ID:</Key>
                                                    <Value>{data.orderId}</Value>
                                                </tr>
                                                <tr>
                                                    <Key>Items:</Key>
                                                    {
                                                        <Value>{getItems(data.items)}</Value>
                                                    }
                                                </tr>
                                                <tr>
                                                    <Key>Date:</Key>
                                                    <Value>{getDate(data.date)}</Value>
                                                </tr>
                                                <tr>
                                                    <Key>Status:</Key>
                                                    <Value style={{color: "green"}}>{data.status}</Value>
                                                    <Value><AppButton color="secondary" onClick={() => openOrderDetails(data.orderId)}>View Details</AppButton></Value>
                                                </tr>
                                            </table>
                                            
                                        </OrderWrapper>

                                        ))
                                    }
                                    </>
                                ) : 
                                    <EmptyOrdersList>You have no orders yet.<Link to="/home">Click here</Link> to start ordering!</EmptyOrdersList>
                            }
                        
                    </ContentContainer>
                </ContentWrapper>
            </ImageWrapper>
            <FooterContainer />
        </Container>
    );
}

export default MyOrders;