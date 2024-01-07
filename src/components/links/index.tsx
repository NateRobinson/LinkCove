import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import LinksItem from './item';

const Links = () => {
  const collections = [1];
  return (
    <Div>
      {collections.map((item) => {
        return <LinksItem key={item}></LinksItem>;
      })}
    </Div>
  );
};

export default Links;

const Div = styled(Box)`
  display: flex;
  flex-direction: column;
`;
