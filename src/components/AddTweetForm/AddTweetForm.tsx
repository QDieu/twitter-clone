import React from 'react';
import { Avatar, Button, CircularProgress, IconButton, styled, TextareaAutosize } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

const AddFormBody = styled('div')({
  display: 'flex',
  width: '100%',
});

const TweetAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6.5),
  height: theme.spacing(6.5),
  marginRight: 15,
}));

const AddFormTextArea = styled(TextareaAutosize)({
  width: '100%',
  border: 0,
  fontSize: 20,
  outline: 'none',
  fontFamily: 'inherit',
  resize: 'none',
});

const AddFormBottom = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const AddFormBottomActions = styled('div')({
  marginTop: 10,
  paddingLeft: 70,

  display: 'flex',
  position: 'relative',
  left: -13,
  justifyContent: 'space-between',
  maxWidth: 450,
});

const AddFormBottomRight = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const AddFormCircleProgress = styled('div')({
  position: 'relative',
  width: 20,
  height: 20,
  margin: '0 10px',
  '& .MuiCircularProgress-root': {
    position: 'absolute',
  },
});

const MAX_LENGTH = 280;

type TProps = {
  maxRows?: number;
};

export const AddTweetForm: React.FC<TProps> = ({ maxRows }) => {
  const [text, setText] = React.useState('');
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget && setText(e.currentTarget.value);
  };

  const handleClickAddTweet = () => {
    setText('');
  };

  return (
    <div>
      <AddFormBody>
        <TweetAvatar
          alt={`Аватарка пользователя UserAvatar`}
          src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
        />
        <AddFormTextArea onChange={handleChangeText} placeholder="Что происходит?" value={text} maxRows={maxRows} />
      </AddFormBody>
      <AddFormBottom>
        <AddFormBottomActions>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </AddFormBottomActions>
        <AddFormBottomRight>
          {text && (
            <>
              <span>{textCount}</span>
              <AddFormCircleProgress>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </AddFormCircleProgress>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={text.length >= MAX_LENGTH}
            color="primary"
            variant="contained">
            Твитнуть
          </Button>
        </AddFormBottomRight>
      </AddFormBottom>
    </div>
  );
};
