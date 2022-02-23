import { Avatar, Grid, IconButton, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/FileUploadOutlined';
import { grey } from '@mui/material/colors';

const TweetContent = styled(Paper)({
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
  width: 450,
  position: 'relative',
  left: -13,
});

const TweetAvatar = styled(Avatar)(({ theme }) => ({
  height: theme.spacing(5),
  width: theme.spacing(5),
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
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <TweetAvatar alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl}></TweetAvatar>
        </Grid>
        <Grid item xs={11}>
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
                <CommentIcon style={{ fontSize: 22 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 22 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 22 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 22 }} />
              </IconButton>
            </div>
          </TweetFooter>
        </Grid>
      </Grid>
    </TweetContent>
  );
};
