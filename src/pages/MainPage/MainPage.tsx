import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <Grid container direction='column' alignItems='center' justifyContent='center' height='100%'>
      <Grid item>
        <Box flex={1}>
          <Typography>Hi, you are welcome on my Test App</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;
