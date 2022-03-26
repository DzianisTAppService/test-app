import styled from 'styled-components';
import { Box } from '@mui/material';

const ModalContentWrapperStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 32px;
`;

export { ModalContentWrapperStyled };
