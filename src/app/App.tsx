import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from 'common/NavBar';
import GlobalStyle from 'common/GlobalStyle';
import { AppContainer } from './App.styles';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <GlobalStyle />
        <NavBar
          links={[
            { text: 'welcome page', linkTo: '/welcome' },
            { text: 'subscribe', linkTo: '/subscribe' },
          ]}
        />

        {/*<MainContentContainer>*/}
        {/*  <AdminLeftSideBar>{Routes}</AdminLeftSideBar>*/}
        {/*</MainContentContainer>*/}
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
