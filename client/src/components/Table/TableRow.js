/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledTableRow = styled.div`
    display: grid;
    grid-template-columns: 222px 274px 560px;
    grid-gap: 64px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 48px 0;

    @media ${device.tablet} {
        grid-template-columns: 151px 170px 360px;
        grid-gap: 20px;
        padding: 24px 0;
    }

    @media ${device.mobile} {
        grid-template-columns: 100%;
        grid-template-rows: 18px 18px 40px;
        grid-row-gap: 4px;
        padding: 24px 0;
    }
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    p {
        margin: 0;
        font-family: IBM Plex Mono;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;

        color: #fff;
        opacity: 0.5;
    }

    @media ${device.tablet} {
        p {
            font-size: 14px;
            line-height: 18.2px
        }
    }
`;

const Arrow = styled.span`
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 18px;
    color: #fff;
    font-weight: 400;
    opacity: 0.5;
    padding: 2px 5px 0 5px;

    @media ${device.tablet} {
        font-size: 11px;
        padding: 0 5px 0 5px;
    }
`;

const PlaceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    h3 {
        margin: 0;
        font-family: IBM Plex Mono;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;

        color: #FFFFFF;
    }

    @media ${device.tablet} {
        h3 {
            font-weight: 700;
            font-size: 14px;
            line-height: 18.2px;
        }
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 18.2px;
    }

    @media ${device.mobile} {
        margin-bottom: 4px;
    }
`;

const ProjectInfo = styled.p`
    margin: 0;
    font-family: IBM Plex Mono;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 18.2px;
    }
`;


const TableRow = ({dateFrom, dateTo, place, project, spec}) => {
    return (
        <StyledTableRow>
            <DateContainer>
                <p>{dateFrom}</p>
                <Arrow>→</Arrow>
                <p>{dateTo}</p>
            </DateContainer>
            <PlaceContainer>
                <h3>{place}</h3>
            </PlaceContainer>
            <InfoContainer>
                <ProjectTitle>
                    {project}
                </ProjectTitle>
                <ProjectInfo>
                    {spec}
                </ProjectInfo>
            </InfoContainer>
        </StyledTableRow>
    );
};

export default TableRow;
