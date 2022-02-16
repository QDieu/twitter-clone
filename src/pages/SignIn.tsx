import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import styled from "@emotion/styled/types/base";

const SignIn: React.FC<{}> = () => {
  const styles = {
    wrapper: {
      display: "flex",
      height: "calc(100vh - 84px)",
    },

    blueSide: {
      backgroundColor: "#1da1f2",
      flex: "0 0 50%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    blueSideListInfo: {
      listStyle: "none",
      padding: 0,
      margin: 0,

      "& h6": {
        color: "#fff",
        fontWeight: 600,
      },
    },

    loginSide: {
      flex: "0 0 50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      overflod: "hidden",
    },

    loginSideWrapper: {
      width: 380,
    },

    loginSideTwitterIcon: {
      fontSize: 45,
    },

    loginSideTitle: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: 60,
      marginTop: 20,
    },
  };

  return (
    <div style={styles.wrapper}>
      <section style={styles.blueSide}>
        <ul style={styles.blueSideListInfo}>
          <li>
            <Typography variant="h6">
              Читайте о том, что вам интересно
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Узнайте, о чем говорят в мире</Typography>
          </li>
          <li>
            <Typography variant="h6">Присоединяйтесь к общению</Typography>
          </li>
        </ul>
      </section>
      <section style={styles.loginSide}>
        <div style={styles.loginSideWrapper}>
          <TwitterIcon style={styles.loginSideTwitterIcon} color="primary" />
          <Typography variant="h4" style={styles.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />

          <Button
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
