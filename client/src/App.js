/* React */
import React from 'react';

/* Containers */
import Header from './containers/Header';

/* Styles */
import styled from 'styled-components';

/* Styled components */
const StyledApp = styled.div`
  background: #201A1A;
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1440px;
  padding: 0 128px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 34px;
  }

  @media (max-width: 375px) {
    padding: 0 16px;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Content>
        <Header />
      </Content>
    </StyledApp>
  );
}

export default App;
