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
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
  const { handleSubmit, control, watch, setValue } = useForm();

  const organizationValue: string = watch('organization');
  const usersValue: string[] = watch('users') || [];

  const filteredUsers: UserType[] = useMemo(
    () => users.filter(user => user.organizationId === organizationValue).slice(0, 9),
    [organizationValue],
  );
  const selectedOrganisationName: string = useMemo(
    () => organizations.find(org => org.id === organizationValue)?.name || 'Error',
    [organizationValue],
  );

  const onSubmit = (data: any) => console.log(data);

  console.log(usersValue, 'usersValue');
  return (
    <form>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Controller
            name='organization'
            control={control}
            render={({ field: { onChange } }) => (
              <FormControl fullWidth>
                <InputLabel id='organization-label' style={{ backgroundColor: '#fff' }}>
                  Organisation
                </InputLabel>
                <Select
                  labelId='organization-label'
                  id='organization'
                  onChange={onChange}
                  value={organizationValue}
                  renderValue={() => <Typography>{selectedOrganisationName}</Typography>}>
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
              render={() => (
                <FormControl fullWidth>
                  <InputLabel id='users-label' style={{ backgroundColor: '#fff' }}>
                    Users
                  </InputLabel>
                  <Select
                    labelId='users-label'
                    id='users'
                    multiple
                    value={usersValue}
                    renderValue={() => <Typography>{usersValue.length} selected</Typography>}>
                    <Box mx={1} mb={1}>
                      <TextField
                        fullWidth
                        variant='outlined'
                        placeholder='Search the user...'
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    {filteredUsers.map(({ firstName, lastName, id }) => (
                      <MenuItem key={id} value={id}>
                        <FormControlLabel
                          onChange={() => {
                            const ifSelected = usersValue.indexOf(id);
                            if (ifSelected > -1) {
                              setValue(
                                'users',
                                usersValue.filter(userId => userId !== id),
                              );
                            } else {
                              setValue('users', [...usersValue, id]);
                            }
                          }}
                          control={<Checkbox checked={Boolean(usersValue.find((u: string) => u === id))} />}
                          label={`${firstName} ${lastName}`}
                        />
                      </MenuItem>
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
