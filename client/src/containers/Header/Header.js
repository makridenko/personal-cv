/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledHeader = styled.div`
    color: #fff;
    width: 100%;
    padding-top: 152px;

    @media (max-width: 768px) {
        padding-top: 192px;
    }

    @media (max-width: 375px) {
        padding-top: 200px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    border: 1px solid pink;

    @media (max-width: 375px) {
        flex-direction: column-reverse;
    }
`;

const GreetContainer = styled.div`
    height: 10px;
    width: 100%;
    background-color: blue;
`;

const ImageContainer = styled.div`
    height: 10px;
    width: 100%;
    background-color: tomato;
`;


const Header = () => (
    <StyledHeader>
        <InfoContainer>
            <GreetContainer />
            <ImageContainer />
        </InfoContainer>
    </StyledHeader>
);

export default Header;
