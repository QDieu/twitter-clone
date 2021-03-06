import { Avatar, IconButton, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/FileUploadOutlined';
import { grey } from '@mui/material/colors';

const TweetContent = styled(Paper)({
  display: 'flex',

  padding: '16px 25px',
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'rgb(245, 248, 250)',
  },
});

const TweetUserName = styled('span')({
  color: grey[500],
});

const TweetFooter = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 450,
  position: 'relative',
  left: -13,
});

const TweetAvatar = styled(Avatar)(({ theme }) => ({
  height: theme.spacing(6.5),
  width: theme.spacing(6.5),
  marginRight: 15,
}));

type TProps = {
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
};

export const Tweet: React.FC<TProps> = ({ user, text }) => {
  return (
    <TweetContent variant="outlined">
      <TweetAvatar alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl}></TweetAvatar>
      <div>
        {' '}
        <Typography>
          <b>{user.fullname}</b> <TweetUserName>@{user.username}</TweetUserName>&nbsp;
          <TweetUserName>·</TweetUserName>&nbsp;
          <TweetUserName>1 ч.</TweetUserName>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        <TweetFooter>
          <div>
            <IconButton>
              <CommentIcon style={{ fontSize: 20 }} />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton>
              <RepostIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <LikeIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ShareIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </TweetFooter>
      </div>
    </TweetContent>
  );
};
