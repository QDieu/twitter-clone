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
  height: "100vh",
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
  left: "65%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "200%",
  height: "200%",
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

export const SignIn: React.FC<{}> = () => {
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
              ?????????????? ?? ??????, ?????? ?????? ??????????????????
            </Typography>
          </BlueSideListInfoItem>
          <BlueSideListInfoItem>
            <Typography variant="h6">
              <PeopleOutlineIcon style={styles.icons} />
              ??????????????, ?? ?????? ?????????????? ?? ????????
            </Typography>
          </BlueSideListInfoItem>
          <BlueSideListInfoItem>
            <Typography variant="h6">
              <MessageIcon style={styles.icons} />
              ?????????????????????????????? ?? ??????????????
            </Typography>
          </BlueSideListInfoItem>
        </BluSideListInfo>
      </BlueSide>
      <LoginSide>
        <LoginSideWrapper>
          <LoginSideTwitterIcon color="primary" />
          <LoginSideTitle variant="h4">??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????</LoginSideTitle>
          <Typography>
            <b>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</b>
          </Typography>
          <br />

          <Button
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOpenRegister}
          >
            ????????????????????????????????????
          </Button>
          <Button variant="outlined" color="primary" fullWidth onClick={handleClickOpenSignIn}>
            ??????????
          </Button>
        </LoginSideWrapper>
      </LoginSide>

      <LoginModal open={visibleModal === "signIn"} onClose={handleCloseModal} />
      <RegisterModal open={visibleModal === "signUp"} onClose={handleCloseModal} />
    </Wrapper>
  );
};
