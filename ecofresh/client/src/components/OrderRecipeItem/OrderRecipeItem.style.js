import styled from "styled-components";

const CartItemContainer = styled.div`
    display: flex;
    padding-bottom: 32px;
`;

const ImageContainer = styled.div`
    padding-right: 16px;
`;

const ContentContainer = styled.div`
    width: calc(100% - 192px);
`;

const DeleteButtonContainer = styled.div`
    height: fit-content;
    margin: auto;
`;

const RecipeName = styled.p``;

const RecipeContent = styled.p``;


export { CartItemContainer, ImageContainer, ContentContainer, DeleteButtonContainer,
    RecipeName, RecipeContent };