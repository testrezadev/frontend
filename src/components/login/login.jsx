import { Button, Rating, Typography } from "@mui/material";
import React from "react";

const login = () => {
  return (
    <div>
      <Typography variant="h2">ورود</Typography>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          sx={{
            borderRadius: 2,
            boxShadow: 0,
          }}>
          {"ورود"}
        </Button>
      </form>
    </div>
  );
};

export default login;
