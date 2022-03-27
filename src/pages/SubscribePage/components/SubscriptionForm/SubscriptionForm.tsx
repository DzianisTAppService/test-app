import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material';

import { organizations, users } from 'testData';

type OrganizationType = {
  name: string;
  id: string;
};

const SubscriptionForm = () => {
  const { handleSubmit, reset, control, watch } = useForm();

  const organizationValue = watch('organization');

  const onSubmit = (data: any) => console.log(data);

  console.log(organizationValue, 'organization');
  return (
    <form>
      <Grid container direction='column'>
        <Grid item>
          <Controller
            name={'organization'}
            control={control}
            render={({ field: { onChange } }) => (
              <FormControl fullWidth>
                <InputLabel id='organization-label'>Organisation</InputLabel>
                <Select labelId='organization-label' id='organization' onChange={onChange} value={organizationValue}>
                  {(organizations as OrganizationType[]).map(({ name, id }) => (
                    <MenuItem key={id} value={id}>
                      <RadioGroup aria-label={name} name={name}>
                        <FormControlLabel
                          value={id}
                          control={<Radio checked={id === organizationValue} />}
                          label={name}
                        />
                      </RadioGroup>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>

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
  );
};

export default SubscriptionForm;
