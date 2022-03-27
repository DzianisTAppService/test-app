import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Checkbox,
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

type UserType = {
  firstName: string;
  lastName: string;
  id: string;
  organizationId: string;
};

const SubscriptionForm = () => {
  const { handleSubmit, control, watch } = useForm();

  const organizationValue = watch('organization');
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.organizationId === organizationValue);
  }, [organizationValue]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <form>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Controller
            name='organization'
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

        {organizationValue && (
          <Grid item>
            <Controller
              name='users'
              control={control}
              render={({ field: { onChange } }) => (
                <FormControl fullWidth>
                  <InputLabel id='users-label'>Users</InputLabel>
                  <Select labelId='users-label' id='users' onChange={onChange} value={organizationValue}>
                    {(filteredUsers as UserType[]).map(({ firstName, lastName, id }) => (
                      <MenuItem key={id} value={id}>
                        {/*checked={*/}
                        {/*id.findIndex(item => item.id === variant.id) >= 0*/}
                        <FormControlLabel control={<Checkbox />} label={`${firstName} ${lastName}`} />
                      </MenuItem>
                      // <MenuItem key={id} value={id}>
                      //   <RadioGroup aria-label={id} name={id}>
                      //     <FormControlLabel
                      //       value={id}
                      //       control={<Radio checked={id === organizationValue} />}
                      //       label={name}
                      //     />
                      //   </RadioGroup>
                      // </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
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
  );
};

export default SubscriptionForm;
