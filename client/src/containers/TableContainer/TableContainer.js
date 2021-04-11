/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledContainer = styled.div`
    width: 100%;
`;

const StyledTableContainer = styled.div`
    display: flex;

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


const TableContainer = ({component}) => {
    return (
        <StyledContainer>
            <StyledTableContainer>
                {component}
            </StyledTableContainer>
        </StyledContainer>
    );
};

export default TableContainer;
