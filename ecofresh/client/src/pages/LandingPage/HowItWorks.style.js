import styled from 'styled-components'

export const PageWrapper = styled.div`
`

export const PageHeadingSection = styled.div`
    padding: 25px;
    text-align: center;
    background-color: #1d3124;
    color: white;
`

export const PageHeading = styled.div`
    color: #FDAD11;
    font-size: 70px;

    @media(max-width:800px) {
        font-size: 50px;
    }
`
export const Row = styled.div`
    width: 100%;
    text-align: center;
    margin-left: 18%;
    margin-top: 3%;
`

export const Column = styled.div`
    align-items: center;
    width: 20%;
    margin-bottom: 16px;
    padding: 0 8px;
    float: left;

    @media(max-width: 800px) {
        width: 50%;
        display: block;
    }
`

export const Card = styled.div`
    margin-left: 20px;
    p{
        font-size: 25px;
        text-align: center;

        @media(max-width: 800px) {
            text-align: left;
        }
    }
`

export const NumberHeading = styled.div`
    font-size: 60px;
    text-align: center;
    color: #1d3124;
    @media(max-width: 800px) {
            text-align: left;
            font-size: 40px;
        }
`
export const Button = styled.div`
    display: flex;
    justify-content: center;
    margin-left: -40px;
    width: 100%;

    @media (max-width:800px){
        width: 100%;
        justify-content: center;
    }
`