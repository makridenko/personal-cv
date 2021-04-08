/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledContainer = styled.div`
    width: 100%;
    border: 1px solid red;
`;

const StyledTableContainer = styled.div`
    display: flex;
    background: tomato;
    height: 100px;

    @media ${device.desktop} {
        padding: 0 128px;
    }

    @media ${device.tablet} {
        padding: 0 34px 0 30px;
    }

    @media ${device.mobile} {
        padding: 0 15.5px;
    }

    @media ${device.mobileS} {
        padding: 0 10.5px 0 9.5px;
    }
`;

const FakeContent = styled.div`
    width: 100%;
    height: 100%;
    background: blue;
`;


const TableContainer = () => {
    return (
        <StyledContainer>
            <StyledTableContainer>
                <FakeContent />
            </StyledTableContainer>
        </StyledContainer>
    );
};

export default TableContainer;
