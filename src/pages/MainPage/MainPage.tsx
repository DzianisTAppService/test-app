import React, { FC } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import PATHS from 'constants/routes-paths';

export type FormData = { formData: { organization: string; users: string[] } };
type SubscribedBlockProps = {
  organizationName: string;
  usersAmount: string | number;
};

const SubscribedBlock: FC<SubscribedBlockProps> = ({ organizationName, usersAmount }) => (
  <Typography variant='h4'>
    You successfully subscribed to {organizationName}, you&apos;ve chosen {usersAmount} workers.
  </Typography>
);

const MainPage: FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { organization, users } = state ? (state as FormData).formData : { organization: null, users: null };

  return (
    <Grid container direction='column' alignItems='center' justifyContent='center' height='100%'>
      <Grid item>
        <Box flex={1}>
          {organization && users ? (
            <SubscribedBlock organizationName={JSON.parse(organization).name} usersAmount={users.length} />
          ) : (
            <>
              <Typography variant='h3'>Hi, you are welcome on my Test App</Typography>
              <Box mt={2} display='flex' justifyContent='center'>
                <Button variant='outlined' onClick={() => navigate(PATHS.subscribe)}>
                  Let&apos;s Subscribe
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;
