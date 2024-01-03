import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import type { ReactNode } from 'react';

const HomeLeft = ({ children }: { children: ReactNode }) => {
  return <Div>{children}</Div>;
};

export default HomeLeft;

const Div = styled(Box)`
  background-color: #bcf3bc;
  min-height: 100vh;
`;
