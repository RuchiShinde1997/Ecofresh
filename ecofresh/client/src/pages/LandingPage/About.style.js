/**
 * @author Vibhor Bhatnagar
 */

import styled from 'styled-components'

export const PageWrapper = styled.div``;

export const AboutSectionText = styled.div`
    padding: 25px;
    text-align: center;
    background-color: #1d3124;
    color: white;

    p{
        font-size: 20px;
    }
`

export const Row = styled.div``
export const Footer = styled.div``

export const ColumnRow1 = styled.div`
    float: left;
    width: 32%;
    margin-bottom: 16px;
    padding: 0 8px;

    @media(max-width: 1200px) {
        width: 48%;
        display: block;
    }
    @media(max-width: 800px) {
        width: 96%;
        display: block;
    }
`

export const ColumnRow2 = styled.div`
    float: left;
    width: 32%;
    margin-bottom: 16px;
    padding: 0 8px;

    @media(max-width: 1200px) {
        width: 48%;
        display: block;
    }
    @media(max-width: 800px) {
        width: 96%;
        display: block;
    }
`

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    margin-left: 20px;

`

export const Container = styled.div`
    text-align: center;
    padding: 20px;

    p {
        font-size: 20px;
        line-height: 0.8;

        &.title {
            font-size: 22px;
            font-weight: 500;
            color: #fdad11;
        }
    }
`

export const Button = styled.div`
    margin-left: 48%;
    padding-bottom: 40px;
`