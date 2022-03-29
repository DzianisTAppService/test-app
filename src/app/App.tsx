import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

import NavBar from 'common/NavBar';
import Routes from './Routes';
import PATHS from 'constants/routes-paths';
import { capitalizeFirstLetter } from 'utils';

import { MainContentContainer } from './App.styles';

const navItems = [
  { text: 'Main', linkTo: PATHS.welcome },
  { text: 'Subscribe', linkTo: PATHS.subscribe },
];

const App: FC = () => {
  const { pathname } = useLocation();
  const title = pathname.substring(1);

  return (
    <>
      <NavBar links={navItems} />

      <MainContentContainer container direction='column'>
        <Box textAlign='center'>
          <Typography variant='h3'>{capitalizeFirstLetter(title)} page</Typography>
        </Box>

        <Grid item container direction='column' alignItems='center' justifyContent='center' flexGrow={1}>
          <Routes />
        </Grid>
      </MainContentContainer>
    </>
  );
};

export default App;
