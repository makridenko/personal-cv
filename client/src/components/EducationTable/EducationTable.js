/* React */
import React from 'react';

/* Components */
import Table from '../Table';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

const StyledEducationTable = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-family: IBM Plex Mono;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 24px;

    @media ${device.desktop} {
        font-size: 24px;
        line-height: 31px;
    }

    @media ${device.tablet} {
        font-size: 22px;
        line-height: 29px;
    }

    @media ${device.mobile} {
        font-size: 20px;
        line-height: 26px;
    }

    @media ${device.mobileS} {
        font-size: 20px;
        line-height: 26px;
    }
`;

const data = [
    {dateFrom: 2015, dateTo: 2019, place: 'РТУ МИРЭА', project: 'Бакалавриат', spec: 'Прикладная математика и информатика'},
    {dateFrom: 2019, dateTo: 2021, place: 'РТУ МИРЭА', project: 'Магистратура', spec: 'Прикладная математика и информатика'}
]

const EducationTable = () => {
    return (
        <StyledEducationTable>
            <Title>Образование</Title>
            <Table
                titles={['Даты', 'ВУЗ', 'Специализация']}
                data={data}
            />
        </StyledEducationTable>
    );
};

export default EducationTable;
