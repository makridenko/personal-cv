/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Links from '../Links';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled components */
const StyledGreetings = styled.div`
`;

const TitleContainer = styled.div`
    color: #fff;
    h1 {
        font-family: IBM Plex Mono;
        font-weight: 500;
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

    @media ${device.mobileS} {
        padding-top: 64px;
        width: 100%;
    }
`;


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
