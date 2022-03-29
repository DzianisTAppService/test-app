import React, { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Checkbox, FormControl, InputAdornment, InputLabel, Select, TextField, Typography } from '@mui/material';

import { users } from 'testData';
import { StyledFormControlLabel, StyledMenuItem } from './UserField.styles';
import SearchIcon from '@mui/icons-material/Search';
import { makeSubStringBold } from 'utils';

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

  useEffect(() => {
    setSearchText('');
  }, [organizationValue]);

  const filteredUsers: UserType[] = useMemo(() => {
    const selectedOrganizationId = JSON.parse(organizationValue).id;
    return users
      .filter(({ firstName, lastName, organizationId }) => {
        const ifSearchFirstName: boolean = firstName.toLowerCase().startsWith(searchText.toLowerCase());
        const ifSearchLastName: boolean = lastName.toLowerCase().startsWith(searchText.toLowerCase());
        return organizationId === selectedOrganizationId && (ifSearchFirstName || ifSearchLastName);
      })
      .slice(0, 9);
  }, [organizationValue, searchText]);

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleCheckUsers = (id: string): void => {
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

  const prepareUserLabel = (label: string): string => (searchText ? makeSubStringBold(label, searchText) : label);

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
              <StyledMenuItem key={id} value={id}>
                <StyledFormControlLabel
                  onChange={() => handleCheckUsers(id)}
                  control={<Checkbox checked={Boolean(usersValue.find((u: string) => u === id))} />}
                  label={
                    <Typography
                      component='span'
                      dangerouslySetInnerHTML={{ __html: prepareUserLabel(`${firstName} ${lastName}`) }}
                    />
                  }
                />
              </StyledMenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default UsersField;
