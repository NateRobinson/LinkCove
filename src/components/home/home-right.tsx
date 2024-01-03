import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import type { ReactNode } from 'react';

const HomeRight = ({ children }: { children: ReactNode }) => {
  return <Div>{children}</Div>;
};

export default HomeRight;

const Div = styled(Box)`
  background-color: #a7a7f1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
