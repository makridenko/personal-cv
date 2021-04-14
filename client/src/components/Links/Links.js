/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledLinks = styled.div`
    display: grid;

    @media ${device.desktop} {
        grid-template-columns: 58px 58px 48px 77px;
        grid-gap: 79px;
    }

    @media ${device.tablet} {
        grid-template-columns: 51px 51px 42px 68px;
        grid-gap: 42.67px;
    }

    @media ${device.mobile} {
        grid-template-columns: 51px 51px 42px 68px;
        grid-gap: 44px;
    }

    @media ${device.mobileS} {
        grid-template-columns: 51px 51px 42px 68px;
        grid-gap: 29px;
    }
`;

const OneLinkContainer = styled.div`
    width: 100%;
`;

const OneLink = styled.a`
    margin: 0;
    padding: 0;
    color: #fff;

    font-family: IBM Plex Mono;
    font-style: normal;
    font-weight: 500;
    border-bottom: 1px solid #fff;
    padding-bottom: 6px;

    @media ${device.desktop} {
        font-size: 16px;
        line-height: 21px;
    }

    @media ${device.tablet}, ${device.mobile} {
        font-size: 14px;
        line-height: 18px;
    }
`;

const Links = () => {
    return (
        <StyledLinks>
            <OneLinkContainer>
                <OneLink>Gitlab</OneLink>
            </OneLinkContainer>
            <OneLinkContainer>
                <OneLink>Github</OneLink>
            </OneLinkContainer>
            <OneLinkContainer>
                <OneLink>Почта</OneLink>
            </OneLinkContainer>
            <OneLinkContainer>
                <OneLink>Telegram</OneLink>
            </OneLinkContainer>
        </StyledLinks>
    );
};

export default Links;
