/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import CVAvatar from '../../components/CVAvatar';
import Greetings from '../../components/Greetings';

/* Styled components */
const StyledHeader = styled.div`
    width: 100%;
`;

const InfoContainer = styled.div`
    display: flex;
    margin-top: 152px;

    @media (max-width: 768px) {
        margin-top: 192px;
    }

    @media (max-width: 375px) {
        flex-direction: column-reverse;
        margin-top: 200px;
    }
`;

const GreetContainer = styled.div`
    width: 100%;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;


const Header = () => (
    <StyledHeader>
        <InfoContainer>
            <GreetContainer>
                <Greetings />
            </GreetContainer>

            <ImageContainer>
                <CVAvatar />
            </ImageContainer>
        </InfoContainer>
    </StyledHeader>
);

export default Header;
