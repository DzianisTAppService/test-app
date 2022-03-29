import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Button, Divider, Grid } from '@mui/material';

import UsersField from './UsersField';
import OrganizationField from './OrganizationField';
import PATHS from 'constants/routes-paths';

const SubscriptionForm: FC = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, watch, setValue } = methods;

  const organizationValue: string = watch('organization');

  useEffect(() => {
    setValue('users', []);
  }, [organizationValue]);

  const onSubmit = (data: any) => {
    navigate(PATHS.welcome, { state: { formData: data } });
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Grid container direction='column' spacing={3}>
          <Grid item>
            <OrganizationField />
          </Grid>

          {organizationValue && (
            <Grid item>
              <UsersField />
            </Grid>
          )}

          <Box my={3}>
            <Divider />
          </Box>

          <Grid item container justifyContent='flex-end'>
            <Button onClick={handleSubmit(onSubmit)} variant='outlined'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default SubscriptionForm;
