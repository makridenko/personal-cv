/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled components */
const StyledGreetings = styled.div`
`;

const TitleContainer = styled.div`
    color: #fff;
    h1 {
        font-family: IBM Plex Mono;
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 44px;
        margin: 0;
        padding: 0;
    }

    @media ${device.desktop} {
        padding-top: 63px;
        width: 500px;

        h1 {
            font-size: 34px;
            line-height: 44px;
        }
    }

    @media ${device.tablet} {
        padding-top: 23px;
        width: 350px;

        h1 {
            font-size: 28px;
            line-height: 36px;
        }
    }

    @media ${device.mobile} {
        padding-top: 64px;
        width: 300px;

        h1 {
            font-size: 24px;
            line-height: 31px;
        }
    }
`;

const StyledLinks = styled.div`
    display: grid;

    @media ${device.desktop} {
        padding-top: 104px;
        grid-template-columns: repeat(4, 48px);
        grid-gap: 79px;
    }

    @media ${device.tablet} {
        padding-top: 120px;
        grid-template-columns: repeat(4, 68px);
        grid-gap: 42.67px;
    }

    @media ${device.mobile} {
        padding-top: 64px;
        grid-template-columns: repeat(4, 68px);
        grid-gap: 24px;
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

const Greetings = () => {
    return (
        <StyledGreetings>
            <TitleContainer>
                <h1>Алексей Макриденко, software engineer.</h1>
            </TitleContainer>
            <Links />
        </StyledGreetings>
    );
};

export default Greetings;
