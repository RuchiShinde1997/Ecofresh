/* 
* @author Ruchi Shinde
*/

import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
`;

const Row = styled.div`
    paddingTop: 8px;
`;

const ContentContainer = styled.div`
    background-color: #FFF; 
    padding: 32px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`;

const ContentWrapper = styled.div`
    padding: 60px;
    @media (min-width: 1365px) {
        width: 1305px;
    margin: auto;
    }
    @media (max-width: 478px) {
        background-color: #FFF;
        padding: 0;
    }
`;

const ImageWrapper = styled.div``;

const Heading = styled.h1`
    width: fit-content;
    margin: auto;
`;

const EmptyOrdersList = styled.div`
    width: fit-content;
    margin: auto;
`;

const OrderWrapper = styled.div`
    padding: 16px;
    background-color: #EFEFEF;
    width: 80%;
    margin: 8px auto;
    display: flex;
    justify-content: center;
`;

const OrderRow = styled.div`
    display:flex;
    justify-content: space-between;
`;

const OrderContent = styled.div`
    padding-left: 16px;
    padding-right: 16px;
`;

const Key = styled.td`
    font-weight: 700;
`;

const Value = styled.td`
    color: green;
`;


export { Container, ContentContainer, ContentWrapper, ImageWrapper, Heading, 
    EmptyOrdersList,OrderWrapper, OrderRow, OrderContent, Key, Value }