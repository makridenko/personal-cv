/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Components */
import Technology from '../../components/Technology';

/* Styled Components */
const StyledStack = styled.div`
    width: 100%;
`;

const StyledContainer = styled.div`
    display: flex;

    @media ${device.desktop} {
        padding: 0 128px;
        margin-top: 250px;
    }

    @media ${device.tablet} {
        padding: 0 28px 0 34px;
        margin-top: 290px;
    }

    @media ${device.mobile} {
        padding: 0 15.5px;
        margin-top: 124px;
    }

    @media ${device.mobileS} {
        padding: 0px 11px 0 9px;
        margin-top: 124px;
    }
`;

const Stack = () => {
    return (
        <StyledStack>
            <StyledContainer>
                <Technology />
            </StyledContainer>
        </StyledStack>
    );
};

export default Stack;
