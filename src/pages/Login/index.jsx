import { Typography } from "@mui/material";
import { LoginForm } from "components";
import React from "react";
import { LoginContainer } from "./styled";

const LoginPage = () => {
  return (
    <LoginContainer className="page">
      <Typography variant="h2" textAlign="center" color="white">
        Login
      </Typography>
      <LoginForm />
    </LoginContainer>
  );
};

export default LoginPage;
