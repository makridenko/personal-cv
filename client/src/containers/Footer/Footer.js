/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import Links from '../../components/Links';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    a {
        color: #201A1A;
        border-bottom: 1px solid #201A1A;
    }

    .links {
        padding: 0;
    }
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 334px;
    width: 1440px;

    @media ${device.tablet} {
        height: 292px;
        width: 768px;
    }

    @media ${device.mobile} {
        height: 100%;
        width: 100%;
        flex-direction: column;
    }

    @media ${device.mobileS} {
        height: 341px;
        width: 320px;
    }
`;

const Title = styled.h1`
    color: #201A1A;
    margin: 0;
    font-family: IBM Plex Mono;
    font-weight: 500;
    font-size: 34px;
    line-height: 44px;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 36.4px;
    }

    @media ${device.mobile} {
        font-size: 22px;
        line-height: 28.6px;
    }
`;

const TitleContainer = styled.div`
    width: 560px;
    height: 44px;
    margin-left: 128px;

    @media ${device.tablet} {
        width: 340px;
        height: 36px;
        margin-left: 34px;
    }

    @media ${device.mobile} {
        width: 343px;
        height: 31px;
        margin-left: 0;
        margin-top: 128px;
    }

    @media ${device.mobileS} {
        width: 300px;
        height: 29px;
    }
`;

const LinksContainer = styled.div`
    margin-left: 64px;

    @media ${device.tablet} {
        margin-left: 20px;
    }

    @media ${device.mobile} {
        margin-left: 0;
        margin-top: 32px;
        margin-bottom: 128px;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContent>
                <TitleContainer>
                    <Title>Буду рад пообщаться!</Title>
                </TitleContainer>
                <LinksContainer>
                    <Links />
                </LinksContainer>
            </StyledContent>
        </StyledFooter>
    );
};

export default Footer;
