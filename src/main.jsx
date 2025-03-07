import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/login/login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/app"
          element={<App />}
        />
        <Route
          path="/"
          element={<h1>Home</h1>}
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
  </StrictMode>
);
