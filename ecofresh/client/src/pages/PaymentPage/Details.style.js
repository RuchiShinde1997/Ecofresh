/**
 * @author Meha Desai
 */

import styled from 'styled-components';

const MainContent = styled.div``;
const HeaderWrapper = styled.div`
    height: 58px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`;

const PageWrapper = styled.div``;

const BottomContainer = styled.div`
    position: relative;
    top: 58px;
`;

const Row = styled.div`
    display: flex;
    height: relative;
    margin: 3px;
    align: center;
`;

const Column = styled.div`
    width: 50%;
    padding: 10px;
    &.text {
        margin: auto;
    }
`;

const Container = styled.div`
    height: 70%;
    align: center;
`;

const Image = styled.img`
    object-fit: cover;
`;

export { MainContent, HeaderWrapper, PageWrapper, BottomContainer, Container, Row, Column, Image };