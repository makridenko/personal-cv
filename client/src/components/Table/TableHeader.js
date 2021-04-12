/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledTableHeader = styled.th`
    display: grid;
    grid-template-columns: 222px 274px 560px;
    grid-gap: 64px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    @media ${device.tablet} {
       grid-template-columns: 151px 170px 360px;
       grid-gap: 20px;
    }

    @media ${device.mobile} {
        display: none;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    padding-bottom: 24px;

    p {
        margin: 0;
        font-family: IBM Plex Mono;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.2);
    }
`;

const TableHeader = ({titles}) => {
    return (
        <StyledTableHeader>
            {titles.map(title => (
                <TitleContainer>
                    <p>{title}</p>
                </TitleContainer>
            ))}
        </StyledTableHeader>
    )
};

export default TableHeader;
