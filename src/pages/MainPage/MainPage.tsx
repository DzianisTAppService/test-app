import React, { FC } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PATHS from 'constants/routes-paths';

const MainPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container direction='column' alignItems='center' justifyContent='center' height='100%'>
      <Grid item>
        <Box flex={1}>
          <Typography>Hi, you are welcome on my Test App</Typography>
          <Box mt={2} display='flex' justifyContent='center'>
            <Button variant='outlined' onClick={() => navigate(PATHS.subscribe)}>
              Let&apos;s Subscribe
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;
