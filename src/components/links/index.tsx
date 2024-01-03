import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import LinksItem from './item';

const Links = () => {
  const collections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Div>
      {collections.map((item) => {
        return <LinksItem></LinksItem>;
      })}
    </Div>
  );
};

export default Links;

const Div = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
