import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListIcon from '@mui/icons-material/ListAltOutlined';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import { styled, Typography, IconButton, Button } from '@mui/material';

const SideMenuList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: 230,
});

const SideMenuListItem = styled('li')(({ theme }) => ({
  cursor: 'pointer',

  '&:hover': {
    '& div': {
      backgroundColor: 'rgba(29,161,242,0.1)',
    },

    '& h6': {
      color: theme.palette.primary.main,
    },

    '& svg path': {
      color: theme.palette.primary.main,
    },
  },

  '& div': {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0 25px 0 20px',
    borderRadius: 30,
    height: 50,
    marginBottom: 15,
    transition: 'background-color 0.15 ease-in-out',
  },
}));

const SideMenuListItemLabel = styled(Typography)({
  fontWeight: 700,
  fontSize: 20,
  marginLeft: 15,
});

const SideMenuTweetButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(3.2),
}));

export const SideMenu: React.FC = () => {
  return (
    <SideMenuList>
      <SideMenuListItem>
        <IconButton color="primary" style={{ marginBottom: 16 }}>
          <TwitterIcon style={{ fontSize: 48 }} />
        </IconButton>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <SearchIcon style={{ fontSize: 36, marginLeft: -5 }} />
          <SideMenuListItemLabel variant="h6">Поиск</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <NotificationIcon style={{ fontSize: 36, marginLeft: -5 }} />
          <SideMenuListItemLabel variant="h6">Уведомления</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <EmailOutlinedIcon style={{ fontSize: 36, marginLeft: -5 }} />
          <SideMenuListItemLabel variant="h6">Сообщения</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <BookmarkIcon style={{ fontSize: 36, marginLeft: -5 }} />
          <SideMenuListItemLabel variant="h6">Закладки</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <ListIcon style={{ fontSize: 36, marginLeft: -5 }} />
          <SideMenuListItemLabel variant="h6">Список</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <div>
          <UserIcon style={{ fontSize: 36, marginLeft: -5 }} />
          <SideMenuListItemLabel variant="h6"> Профиль</SideMenuListItemLabel>
        </div>
      </SideMenuListItem>
      <SideMenuListItem>
        <SideMenuTweetButton fullWidth color="primary" variant="contained">
          Твитнуть
        </SideMenuTweetButton>
      </SideMenuListItem>
    </SideMenuList>
  );
};
