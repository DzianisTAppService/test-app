import React, { FC, useMemo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { users } from 'testData';
import { StyledButton } from './UserField.styles';
import SearchIcon from '@mui/icons-material/Search';

type UserType = {
  firstName: string;
  lastName: string;
  id: string;
  organizationId: string;
};

// const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
// const checkedIcon = <CheckBoxIcon fontSize='small' />;

const UsersField: FC = () => {
  const { control, watch, setValue } = useFormContext();
  const [searchText, setSearchText] = useState<string>('');
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);

  const organizationValue: string = watch('organization');
  const usersValue: string[] = watch('users') || [];
  const filteredUsers: UserType[] = useMemo(
    () => users.filter(user => user.organizationId === organizationValue).slice(0, 9),
    [organizationValue],
  );

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

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
              />
            </Box>
            {filteredUsers.map(({ firstName, lastName, id }) => (
              <MenuItem key={id} value={id}>
                <FormControlLabel
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
    // <Controller
    //   name='users'
    //   control={control}
    //   render={() => (
    //     <Box>
    //       <StyledButton
    //         fullWidth
    //         id='basic-button'
    //         aria-controls={open ? 'basic-menu' : undefined}
    //         aria-haspopup='true'
    //         aria-expanded={open ? 'true' : undefined}
    //         onClick={handleClick}
    //         variant='outlined'
    //         style={open ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}}>
    //         {usersValue.length ? `${usersValue.length} selected` : 'Select users'}
    //       </StyledButton>
    //
    //       <Menu
    //         id='basic-menu'
    //         anchorEl={anchorEl}
    //         open={open}
    //         onClose={handleClose}
    //         MenuListProps={{
    //           'aria-labelledby': 'basic-button',
    //           style: {
    //             width: '398px',
    //             paddingTop: 0,
    //             border: '1px solid #9f9f9f99',
    //             borderRadius: '4px',
    //             borderTop: 'none',
    //             borderTopLeftRadius: 0,
    //             borderTopRightRadius: 0,
    //           },
    //         }}
    //         elevation={0}>
    //         <MenuItem>
    //           <FormControl fullWidth>
    //             <Autocomplete
    //               multiple
    //               id='users'
    //               options={filteredUsers}
    //               disableCloseOnSelect
    //               getOptionLabel={option => `${option.firstName} ${option.lastName}`}
    //               renderTags={(value: UserType[]) => <Typography>{value.length} selected</Typography>}
    //               renderOption={(props, option, { selected }) => (
    //                 <li {...props}>
    //                   <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    //                   {`${option.firstName} ${option.lastName}`}
    //                 </li>
    //               )}
    //               renderInput={params => <TextField {...params} label='Users' placeholder='Search...' />}
    //             />
    //           </FormControl>
    //         </MenuItem>
    //       </Menu>
    //     </Box>
    //   )}
    // />
  );
};

export default UsersField;
