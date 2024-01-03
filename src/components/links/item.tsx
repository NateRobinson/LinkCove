import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';

const LinksItem = () => {
  const links = [
    {
      url: 'https://www.arcblock.io',
      icon: 'https://www.arcblock.io/favicon.ico',
      name: 'ArcBlock WebSite1',
    },
    {
      url: 'https://www.arcblock.io',
      icon: 'https://www.arcblock.io/favicon.ico',
      name: 'ArcBlock WebSite2',
    },
    {
      url: 'https://www.arcblock.io',
      icon: 'https://www.arcblock.io/favicon.ico',
      name: 'ArcBlock WebSite3',
    },
    {
      url: 'https://www.arcblock.io',
      icon: 'https://www.arcblock.io/favicon.ico',
      name: 'ArcBlock WebSite4',
    },
  ];
  return (
    <Div>
      <span className="links-item-title">社区论坛</span>
      <div className="links-item-container">
        {links.map((item) => {
          return (
            <div className="link-item-content">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} />
              <div className="link-item-and-name">
                <span className="link-item-name">{item.name}</span>
                <span className="link-item-url">
                  {item.url}
                  {item.url}
                  {item.url}
                </span>
              </div>
            </div>
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
    margin: 24px 0 12px 0;
  }
  .links-item-container {
    display: flex;
    flex-wrap: wrap;
    .link-item-content {
      display: flex;
      margin: 0 10px 10px 0;
      border: 1px solid red;
      padding: 8px;
      max-width: 30%;
      overflow: hidden;
      cursor: pointer;
      .link-item-and-name {
        display: flex;
        flex-direction: column;
        margin-left: 6px;
        align-items: flex-start;
        .link-item-name {
          font-weight: bold;
        }
      }
    }
  }
`;
