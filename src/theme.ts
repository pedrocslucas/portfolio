// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Azul principal
    secondary: { main: "#ff4081" }, // Rosa moderno
    background: { default: "#e0e0e0" }, // Cinza claro para efeito de sombra
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h2: { fontWeight: 700 },
    body1: { lineHeight: 1.7 },
  },
  components: {
    // Botões com efeito de neomorfismo
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          background: "#e0e0e0",
          boxShadow: "6px 6px 12px #bebebe, -6px -6px 12px #ffffff",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
            background: "#e0e0e0",
          },
        },
      },
    },
    // Paper/Card estilizados
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          background: "#e0e0e0",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
        },
      },
    },
    // Chips com relevo
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          background: "#e0e0e0",
          boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
        },
      },
    },
    // AppBar minimalista
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#e0e0e0",
          boxShadow: "6px 6px 12px #bebebe, -6px -6px 12px #ffffff",
          color: "#1976d2",
        },
      },
    },
  },
});

export default theme;
