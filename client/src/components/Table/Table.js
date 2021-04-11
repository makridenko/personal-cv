/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled Components */
const StyledTable = styled.table`
    width: 100%;
`;

const StyledTableHeader = styled.th`
    display: grid;
    grid-template-columns: 222px 274px 560px;
    grid-gap: 64px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const TitleContainer = styled.div`
    display: flex;
    padding-bottom: 24px;
`;

const Title = styled.p`
    margin: 0;
    font-family: IBM Plex Mono;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.2);
`;

const TableHeader = ({titles}) => {
    return (
        <StyledTableHeader>
            {titles.map(title => (
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
            ))}
        </StyledTableHeader>
    )
};

const StyledTableBody = styled.div`
    width: 100%;
    margin-top: 48px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledTableRow = styled.div`
    display: grid;
    grid-template-columns: 222px 274px 560px;
    grid-gap: 64px;
    width: 100%;
`;

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin: 0;
        font-family: IBM Plex Mono;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;

        color: #fff;
        opacity: 0.5;
    }
`;

const TableRow = ({dateFrom, dateTo, univer, grad, spec}) => {
    return (
        <StyledTableRow>
            <DateContainer><p>{dateFrom}</p><p>{dateTo}</p></DateContainer>
            <div>{univer}</div>
            <div>{grad} {spec}</div>
        </StyledTableRow>
    );
}

const TableBody = ({data}) => {
    return (
        <StyledTableBody>
            {data.map(data => (
                <TableRow
                    dateFrom={data.dateFrom}
                    dateTo={data.dateTo}
                    univer={data.univer}
                    grad={data.grad}
                    spec={data.spec}
                />
            ))}
        </StyledTableBody>
    );
};

const data = [
    {dateFrom: 2015, dateTo: 2019, univer: 'РТУ МИРЭА', grad: 'Бакалавриат', spec: 'Прикладная математика и информатика'},
]

const Table = ({titles}) => (
    <StyledTable>
        <TableHeader titles={titles} />
        <TableBody data={data}/>
    </StyledTable>
);

export default Table;
