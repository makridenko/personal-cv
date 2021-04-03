/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledGreetings = styled.div`
    padding-top: 63px;

    @media (max-width: 768px) {
        padding-top: 23px;
    }

    @media (max-width: 375px) {
        padding-top: 64px;
    }
`;

const TitleContainer = styled.div`
    h1 {
        font-family: IBM Plex Mono;
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 44px;
        margin: 0;

        color: #fff;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 28px;
            line-height: 36px;
        }
    }

    @media (max-width: 375px) {
        h1 {
            font-size: 24px;
            line-height: 31px;
        }
    }
`;

const StyledLinks = styled.div`
    margin-top: 104px;
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-gap: 79px;

    @media (max-width: 768px) {
        margin-top: 120px;
        grid-gap: 42.67px;
    }

    @media (max-width: 375px) {
        margin-top: 64px;
        grid-gap: 44px;
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
    font-size: 16px;
    line-height: 21px;
    padding-bottom: 6px;
    border-bottom: 1px solid #fff;

    @media (max-width: 768px) {
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
                <h1>Алексей Макриденко,</h1>
                <h1>software engineer.</h1>
            </TitleContainer>
            <Links />
        </StyledGreetings>
    );
};

export default Greetings;
