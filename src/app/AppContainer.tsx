import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'common/GlobalStyle';

import { StyledAppContainer } from './App.styles';

const AppContainer: FC = ({ children }) => (
  <BrowserRouter>
    <StyledAppContainer>
      <GlobalStyle />
      {children}
    </StyledAppContainer>
  </BrowserRouter>
);

export default AppContainer;
