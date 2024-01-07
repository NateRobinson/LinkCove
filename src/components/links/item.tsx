import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { myCommonLinks } from '../../mock/mock';

const LinksItem = () => {
  const links = myCommonLinks;
  return (
    <Div>
      <span className="links-item-title">常用链接</span>
      <div className="links-item-container">
        {links.map((item) => {
          return (
            <Paper className="link-item-content" key={item.id} square elevation={0}>
              <Avatar alt="Remy Sharp" src={item.icon} sx={{ width: 40, height: 40 }} />
              <div className="link-item-and-name">
                <span className="link-item-name">{item.title}</span>
              </div>
            </Paper>
          );
        })}
      </div>
    </Div>
  );
};

export default LinksItem;

const Div = styled(Box)`
  display: flex;
  flex-direction: column;
  .links-item-title {
    font-size: 24px;
    font-weight: bold;
    text-align: start;
    margin: 0px 0 12px 0;
  }
  .links-item-container {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    margin: 0 auto;
    .link-item-content {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      overflow: hidden;
      cursor: pointer;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      .link-item-and-name {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 4px;
        .link-item-name {
          font-size: 12px;
        }
      }
      &:hover {
        z-index: 2;
        box-shadow:
          rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
          rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
      }
    }
  }
`;
