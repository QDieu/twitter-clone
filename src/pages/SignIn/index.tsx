import { Button, Typography, styled } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MessageIcon from "@mui/icons-material/CommentOutlined";
import React from "react";
import { LoginModal } from "./components/LoginModal";
import { RegisterModal } from "./components/RegisterModal";

const Wrapper = styled("div")({
  display: "flex",
  height: "calc(100vh - 84px)",
});

const BlueSide = styled("section")({
  backgroundColor: "#71c9f8",
  flex: "0 0 50%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
});

const BlueSideBigIcon = styled(TwitterIcon)({
  position: "absolute",
  left: "48%",
  top: "60%",
  transform: "translate(-50%, -50%)",
  width: "250%",
  height: "250%",
});

const BluSideListInfo = styled("ul")({
  position: "relative",
  listStyle: "none",
  padding: 0,
  margin: 0,
  width: 380,

  "& h6": {
    color: "white",
    display: "flex",
    alignItems: "center",

    fontWeight: 700,
    fontSize: 20,
  },
});

const BlueSideListInfoItem = styled("li")({
  marginBottom: 40,
});

const LoginSide = styled("section")({
  flex: "0 0 50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginSideWrapper = styled("div")({
  width: 380,
});

const LoginSideTwitterIcon = styled(TwitterIcon)({
  fontSize: 45,
});

const LoginSideTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: 32,
  marginBottom: 60,
  marginTop: 20,
});

const styles = {
  icons: {
    fontSize: 32,
    marginRight: 18,
  },
};

const SignIn: React.FC<{}> = () => {
  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = () => {
    setVisibleModal("signIn");
  };

  const handleClickOpenRegister = () => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = () => {
    setVisibleModal(undefined);
  };

  return (
    <Wrapper>
      <BlueSide>
        <BlueSideBigIcon color="primary" />
        <BluSideListInfo>
          <BlueSideListInfoItem>
            <Typography variant="h6">
              <SearchIcon style={styles.icons} />
              Читайте о том, что вам интересно
            </Typography>
          </BlueSideListInfoItem>
          <BlueSideListInfoItem>
            <Typography variant="h6">
              <PeopleOutlineIcon style={styles.icons} />
              Узнайте, о чем говорят в мире
            </Typography>
          </BlueSideListInfoItem>
          <BlueSideListInfoItem>
            <Typography variant="h6">
              <MessageIcon style={styles.icons} />
              Присоединяйтесь к общению
            </Typography>
          </BlueSideListInfoItem>
        </BluSideListInfo>
      </BlueSide>
      <LoginSide>
        <LoginSideWrapper>
          <LoginSideTwitterIcon color="primary" />
          <LoginSideTitle variant="h4">Узнайте, что происходит в мире прямо сейчас</LoginSideTitle>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />

          <Button
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOpenRegister}
          >
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth onClick={handleClickOpenSignIn}>
            Войти
          </Button>
        </LoginSideWrapper>
      </LoginSide>

      <LoginModal open={visibleModal === "signIn"} onClose={handleCloseModal} />
      <RegisterModal open={visibleModal === "signUp"} onClose={handleCloseModal} />
    </Wrapper>
  );
};

export default SignIn;
