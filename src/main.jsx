import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/login/login.jsx";
import HomeIcon from "@mui/icons-material/Home";
import { RtlProvider } from "./utils/RtlProvider.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

https: createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RtlProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/app"
              element={<App />}
            />
            <Route
              path="/"
              element={
                <>
                  <HomeIcon fontSize="large" />
                  <h1>Home</h1>
                </>
              }
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="*"
              element={<h1>Not Found</h1>}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RtlProvider>
  </StrictMode>
);
