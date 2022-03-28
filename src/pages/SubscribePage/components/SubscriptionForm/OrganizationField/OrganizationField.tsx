import React, { FC, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';

import { organizations } from 'testData';

type OrganizationType = {
  name: string;
  id: string;
};

const OrganizationField: FC = () => {
  const { control, watch } = useFormContext();
  const organizationValue: string = watch('organization');

  const selectedOrganisationName: string = useMemo(
    () => organizations.find(org => org.id === organizationValue)?.name || 'Error',
    [organizationValue],
  );

  return (
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
                  <FormControlLabel value={id} control={<Radio checked={id === organizationValue} />} label={name} />
                </RadioGroup>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default OrganizationField;
