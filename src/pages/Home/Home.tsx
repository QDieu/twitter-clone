import { Grid, IconButton, Paper } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListIcon from "@mui/icons-material/ListAltOutlined";
import UserIcon from "@mui/icons-material/PersonOutlineOutlined";

type TProps = {};

export const HomePage: React.FC<TProps> = () => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <ul>
            <li>
              <IconButton color="primary">
                <TwitterIcon style={{ fontSize: 28 }} />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <SearchIcon style={{ fontSize: 28 }} />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <NotificationIcon style={{ fontSize: 28 }} />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <EmailOutlinedIcon style={{ fontSize: 28 }} />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <BookmarkIcon style={{ fontSize: 28 }} />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <ListIcon style={{ fontSize: 28 }} />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <UserIcon style={{ fontSize: 28 }} />
              </IconButton>
            </li>
          </ul>
        </Grid>
        <Grid item xs={7}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </section>
  );
};
