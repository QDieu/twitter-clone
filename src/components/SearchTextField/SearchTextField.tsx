import { styled, TextField } from "@mui/material";

export const SearchTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 45,
    backgroundColor: "#E6ECF0",
    padding: 0,
    paddingLeft: 15,
    "&:hover": {
      "& fieldset": { borderColor: "transparent" },
    },
    "&.Mui-focused": {
      backgroundColor: "#fff",
      "& fieldset": { borderWidth: 1, borderColor: theme.palette.primary.main },
      "& svg path": {
        fill: theme.palette.primary.main,
      },
    },
    "& fieldset": {
      borderColor: "transparent",
      borderWidth: 1,
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 14px 14px 5px",
  },
}));
