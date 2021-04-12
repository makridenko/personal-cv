/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import TableHeader from './TableHeader';
import TableRow from './TableRow';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledTable = styled.table`
    width: 100%;
`;

const StyledTableBody = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const FakeLine = styled.div`
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: none;

    @media ${device.mobile} {
        display: block;
    }
`;


const TableBody = ({data}) => {
    return (
        <StyledTableBody>
            {data.map(data => (
                <TableRow
                    dateFrom={data.dateFrom}
                    dateTo={data.dateTo}
                    place={data.place}
                    project={data.project}
                    spec={data.spec}
                />
            ))}
        </StyledTableBody>
    );
};


const Table = ({titles, data}) => (
    <StyledTable>
        <FakeLine />
        <TableHeader titles={titles} />
        <TableBody data={data}/>
    </StyledTable>
);

export default Table;
