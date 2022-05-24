/**
 * @author Mugdha Agharkar
 */

import styled from 'styled-components';

 const Container = styled.div`
    height: 100vh;
`;

const ImageWrapper = styled.div``;

const Heading = styled.h1`
    width: fit-content;
    margin: auto;
`;

const CartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
`;

const CartItems = styled.div`
    padding-right: 32px;
`;

const PaymentInfo = styled.div``;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 20px;
    padding-top: 16px;
    &.final {
        font-size: 24px;
        padding-top: 24px;
    }
    &.taxes {
        padding-bottom: 24px;
    }
`;

const RowItem = styled.div`
    &.value{
        padding-left: 160px;
    }
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

const EmptyCart = styled.div`
    width: fit-content;
    margin: auto;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 32px;
`;

const DividerWrapper = styled.div`
    @media (max-width: 992px) {
        display: none;
    }
`;

const HorizontalDividerWrapper = styled.div`
    display: none;
    @media (max-width: 992px) {
        display: block;
    }
`;

const ButtonWrapper = styled.div`
    padding-top: 32px;
    width: fit-content;
    margin-left: auto;
`;

export {Container, ImageWrapper, Heading, CartContainer, CartItems, PaymentInfo, HorizontalDividerWrapper,
    Row,RowItem, ContentContainer, ContentWrapper, EmptyCart, FlexContainer, DividerWrapper, ButtonWrapper,
}
