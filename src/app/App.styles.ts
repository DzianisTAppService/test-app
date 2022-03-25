import styled from 'styled-components';
import { Box } from '@mui/material';

const AppContainer = styled(Box)`
  height: 100%;
  width: 100%;
`;

const MainContentContainer = styled(Box)`
  height: calc(100vh - 64px);
  width: 100%;
`;

export { AppContainer, MainContentContainer };
