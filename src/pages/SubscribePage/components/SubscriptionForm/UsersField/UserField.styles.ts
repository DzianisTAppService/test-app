import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
  height: 57px;
  justify-content: flex-start;
  transition: none;
  border-color: #9f9f9f99;
  color: #000;
  &:hover {
    background-color: #fff;
    border-color: #000;
  }
`;
