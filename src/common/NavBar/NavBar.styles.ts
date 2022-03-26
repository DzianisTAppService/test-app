import styled from 'styled-components';
import { AppBar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBarStyled = styled(AppBar)`
  background-color: #ffc261;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const AppBarLogo = styled(Box)`
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid #fff;
  color: #fff;
`;

export { AppBarStyled, AppBarLogo, LogoLink };
