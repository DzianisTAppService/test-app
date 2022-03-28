import React, { FC, useMemo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Box,
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { users } from 'testData';
import { StyledFormControlLabel } from './UserField.styles';
import SearchIcon from '@mui/icons-material/Search';

type UserType = {
  firstName: string;
  lastName: string;
  id: string;
  organizationId: string;
};

const UsersField: FC = () => {
  const { control, watch, setValue } = useFormContext();
  const [searchText, setSearchText] = useState<string>('');

  const organizationValue: string = watch('organization');
  const usersValue: string[] = watch('users') || [];

  const filteredUsers: UserType[] = useMemo(
    () => users.filter(user => user.organizationId === organizationValue).slice(0, 9),
    [organizationValue],
  );

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleCheckUsers = (id: string) => {
    const ifSelected = usersValue.indexOf(id);
    if (ifSelected > -1) {
      setValue(
        'users',
        usersValue.filter(userId => userId !== id),
      );
    } else {
      setValue('users', [...usersValue, id]);
    }
  };

  return (
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
                value={searchText}
                onChange={handleChangeSearchText}
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
                onKeyDown={e => e.stopPropagation()}
              />
            </Box>
            {filteredUsers.map(({ firstName, lastName, id }) => (
              <MenuItem key={id} value={id}>
                <StyledFormControlLabel
                  onChange={() => handleCheckUsers(id)}
                  control={<Checkbox checked={Boolean(usersValue.find((u: string) => u === id))} />}
                  label={`${firstName} ${lastName}`}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default UsersField;
