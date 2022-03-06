import React from "react";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { SideMenu, Tweet, SearchTextField, AddTweetForm } from "../../components";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAddOutlined";

const Wrapper = styled(Container)({
  height: "100vh",
});

const TweetsWrapper = styled(Paper)({
  borderRadius: 0,
  height: "100%",
  borderTop: 0,
  borderBottom: 0,
});

const TweetsHeader = styled(Paper)({
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  padding: "10px 15px",

  "& h6": {
    fontWeight: 800,
  },
});

const RightSide = styled("div")({
  paddingTop: 20,
  position: "sticky",
  top: 0,
});

const RightSideBlock = styled(Paper)({
  backgroundColor: "#f5f8fa",
  borderRadius: 15,
  marginTop: 20,
  "& .MuiList-root": {
    paddinTop: 0,
  },
});

const RightSideBlockHeader = styled(Paper)({
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  backgroundColor: "transparent",
  padding: "13px 18px",
  "& b": {
    fontSize: 20,
    fontWeight: 800,
  },
});

const RightSideBlockItem = styled(ListItem)({
  cursor: "pointer",
  "& .MuiTypography-body1": {
    fontWeight: 700,
  },
  "& .MuiListItemAvatar-root": {
    minWidth: 50,
  },
  "& .MuiListItemText-root": {
    margin: 0,
  },
  "&:hover": {
    backgroundColor: "#edf3f6",
  },
});

const AddForm = styled("div")({
  padding: 20,
});

const AddFormBottomLine = styled("div")({
  height: 12,
  backgroundColor: "#E6ECF0",
});

type TProps = {};

export const HomePage: React.FC<TProps> = () => {
  return (
    <Wrapper maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={8} md={6}>
          <TweetsWrapper variant="outlined" style={{ height: "100%" }}>
            <TweetsHeader variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </TweetsHeader>
            <Paper>
              <AddForm>
                <AddTweetForm />
              </AddForm>
              <AddFormBottomLine />
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text={
                    "Замечаю корреляцию между опытом и решимостью. Чем более опытный специалист, тем сложнее ему приступить к своим идеям, т.к. на него давит груз знаний, а в начале пути мы брались за всё, хоть и не могли их завершить."
                  }
                  user={{
                    fullname: "Nik Gubin",
                    username: "gubin_nik",
                    avatarUrl: "https://pbs.twimg.com/profile_images/1493952108449898496/x8x0-RtF_400x400.jpg",
                  }}
                />
              ),
            ]}
          </TweetsWrapper>
        </Grid>
        <Grid item sm={3} md={3}>
          <RightSide>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <RightSideBlock>
              <RightSideBlockHeader variant="outlined">
                <b>Актуальные темы</b>
              </RightSideBlockHeader>
              <List>
                <RightSideBlockItem>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </RightSideBlockItem>
                <Divider component="li" />
                <RightSideBlockItem>
                  <ListItemText
                    primary="#коронавирус"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 163 122
                      </Typography>
                    }
                  />
                </RightSideBlockItem>
                <Divider component="li" />
                <RightSideBlockItem>
                  <ListItemText
                    primary="Украина"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 39 554
                      </Typography>
                    }
                  />
                </RightSideBlockItem>
                <Divider component="li" />
              </List>
            </RightSideBlock>
            <RightSideBlock>
              <RightSideBlockHeader>
                <b>Кого читать</b>
              </RightSideBlockHeader>
              <List>
                <RightSideBlockItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock of Shame"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </RightSideBlockItem>
                <Divider component="li" />
              </List>
            </RightSideBlock>
          </RightSide>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
