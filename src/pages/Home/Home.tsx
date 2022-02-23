import React from 'react';
import { Container, Grid, InputBase, Paper, styled, Typography } from '@mui/material';
import { SideMenu, Tweet } from '../../components';

const Wrapper = styled(Container)({
  height: '100vh',
});

const SearchTextField = styled(InputBase)({
  input: {
    borderRadius: 30,
    backgroundColor: '#e6ecf0',
    height: 45,
    paddingLeft: 8,
    margin: 0,
  },
});

const TweetsWrapper = styled(Paper)({
  borderRadius: 0,
  height: '100%',
  borderTop: 0,
  borderBottom: 0,
});

const TweetsHeader = styled(Paper)({
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  padding: '10px 15px',

  '& h6': {
    fontWeight: 800,
  },
});

type TProps = {};

export const HomePage: React.FC<TProps> = () => {
  return (
    <Wrapper maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={6}>
          <TweetsWrapper variant="outlined" style={{ height: '100%' }}>
            <TweetsHeader variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </TweetsHeader>
            {[
              ...new Array(20).fill(
                <Tweet
                  text={
                    'Замечаю корреляцию между опытом и решимостью. Чем более опытный специалист, тем сложнее ему приступить к своим идеям, т.к. на него давит груз знаний, а в начале пути мы брались за всё, хоть и не могли их завершить.'
                  }
                  user={{
                    fullname: 'Nik Gubin',
                    username: 'gubin_nik',
                    avatarUrl: 'https://pbs.twimg.com/profile_images/1493952108449898496/x8x0-RtF_400x400.jpg',
                  }}
                />,
              ),
            ]}
          </TweetsWrapper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
        </Grid>
      </Grid>
    </Wrapper>
  );
};
