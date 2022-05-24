/**
 * @author Vibhor Bhatnagar
 */

import styled from 'styled-components'

export const PageWrapper = styled.div`
`;

export const ImageContainer = styled.div`
    display: flex;
    height: 200px;

    img {
        object-fit: cover;
        height: 200px;
        width: 100%;
    }

    @media (max-width: 768px) {
        height: 162px;
        img {
            height: 162px;
        }
    }
`

export const Title = styled.div`
    display: flex;
    height: 123px;
    width: 100%;
    justify-content: center;
    text-align: center;
    border-bottom: solid 2px;

    text {
        margin: 15px;
        font-size: 72px;
        text-align: center;
    }

    @media (max-width: 768px) {
        height: 62px;
        text {
            margin: 8px;
            font-size: 36px;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    &.headingRow {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
`
export const Form = styled.div`
`;

export const Column = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 50%;
    align-items: center;

    @media (max-width: 708px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
    }
`

export const NoRequests = styled.div`
    //background-color: #EFEFEF;
    padding: 24px; 
    margin: auto;
`;

export const RowContainer = styled.div`
    display: flex;
    width: 80%;
    border-radius: 20px;
    justify-content: center;
    background-color: #C3F1A9;
    @media (max-width: 400px) {
        width: 100%;
        border-radius: 0;
    }
`;

export const Text = styled.text`
    color: #fff;
    margin-left: 20px;
`;