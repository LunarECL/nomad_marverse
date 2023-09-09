import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "light") => {
  let background, text, red;

  if (mode === "dark") {
    background = "#000000";
    text = "#FFFFFF";
    red = "#9F281D";
  } else {
    background = "#FFFFFF";
    text = "#000000";
    red = "#DC4C3E";
  }

  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: red,
      },
      secondary: {
        main: "#FFFFFF",
      },
      background: {
        default: background,
      },
      text: {
        primary: text,
        secondary: text,
      },
    },
  });
};

export const darkTheme = getTheme("dark");
export const lightTheme = getTheme("light");
