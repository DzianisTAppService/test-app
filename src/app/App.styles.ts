import styled from 'styled-components';
import { Box, Grid } from '@mui/material';

const StyledAppContainer = styled(Box)`
  height: 100%;
  width: 100%;
`;

const MainContentContainer = styled(Grid)`
  height: calc(100vh - 64px);
  width: 100%;
  padding: 24px;
`;

export { StyledAppContainer, MainContentContainer };
