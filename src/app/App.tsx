import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from 'common/NavBar';
import GlobalStyle from 'common/GlobalStyle';
import Routes from './Routes';
import PATHS from 'constants/routes-paths';

import { AppContainer, MainContentContainer } from './App.styles';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <GlobalStyle />
        <NavBar
          links={[
            { text: 'welcome page', linkTo: PATHS.welcome },
            { text: 'subscribe', linkTo: PATHS.subscribe },
          ]}
        />

        <MainContentContainer>
          <Routes />
          {/*  <AdminLeftSideBar>{Routes}</AdminLeftSideBar>*/}
        </MainContentContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
