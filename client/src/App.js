/* React */
import React from 'react';

/* Containers */
import Header from './containers/Header';
import Stack from './containers/Stack';
import TableContainer from './containers/TableContainer';
import Footer from './containers/Footer';

/* Components */
import EducationTable from './components/EducationTable';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from './ui-kit/css-devices';

/* Styled components */
const StyledApp = styled.div`
  background: #201A1A;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  @media ${device.desktop} {
    width: 1440px;
  }

  @media ${device.tablet} {
    width: 768px;
  }

  @media ${device.mobile} {
    width: 375px;
  }

  @media ${device.mobileS} {
    width: 320px;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Content>
        <Header />
        <Stack />
        <TableContainer
          component={<EducationTable />}
        />
      </Content>
      <Footer />
    </StyledApp>
  );
}

export default App;
