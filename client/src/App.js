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
`;

const Content = styled.div`
  border: 1px solid tomato;
  margin: 0 128px;

  @media (max-width: 768px) {
    margin: 0 34px;
  }

  @media (max-width: 375px) {
    margin: 0 15.5px;
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
