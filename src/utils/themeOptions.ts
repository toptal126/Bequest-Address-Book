import { ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "gotham ssm",
  },
  palette: {
    primary: {
      main: "#F44336",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      paper: "#ffff",
      default: "#f9f6f6",
    },
    text: {
      secondary: "rgba(255,255,255,0.7)",
      primary: "#343a40",
      disabled: "rgba(255,255,255,0.7)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "26px",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "28px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "100%",
          border: "1px solid #c8c8c8",
          height: "42px",
          padding: "0 1.5rem",
          borderRadius: "28px",
          backgroundColor: "#fff",
          boxShadow: "0 0 0 30px white inset !important",
          "& .MuiInputBase-input": {
            "&::placeholder": {
              color: "#A5A082 !important",
            },
          },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80,
        },
      },
    },
  },
};
