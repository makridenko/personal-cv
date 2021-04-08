/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import CVAvatar from '../../components/CVAvatar';
import Greetings from '../../components/Greetings';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled components */
const StyledHeader = styled.div`
    width: 100%;
`;

const InfoContainer = styled.div`
    display: flex;

    @media ${device.desktop} {
        padding: 0 128px;
        margin-top: 152px;
    }

    @media ${device.tablet} {
        padding: 0 28px 0 34px;
        margin-top: 192px;
    }

    @media ${device.mobile} {
        flex-direction: column-reverse;
        padding: 0 15.5px;
        margin-top: 110px;
    }

    @media ${device.mobileS} {
        flex-direction: column-reverse;
        padding: 10.5px;
        margin-top: 110px;
    }
`;

const GreetContainer = styled.div`
    @media ${device.desktop} {
        width: 50%;
    }

    @media ${device.tablet} {
        width: 58%;
    }

    @media ${device.mobile} {
        width: 100%;
    }

    @media ${device.mobileS} {
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;

    @media ${device.desktop} {
        width: 50%;
        padding-right: 82px;
    }

    @media ${device.tablet} {
        width: 42%;
    }

    @media ${device.mobile} {
        width: 100%;
        padding: 0;
        justify-content: center;
        align-items: center;
    }

    @media ${device.mobile} {
        width: 100%;
        padding: 0;
        justify-content: center;
        align-items: center;
    }
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
