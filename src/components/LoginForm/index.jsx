import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { callEndpoint } from "../../services/endpoints-calls";
import { schema } from "./validation-schema.js";
import { UsernameField } from "./components";
import { PasswordField } from "./components";
import Button from "../Button";
import { LoginFormContainer } from "./styled";

export const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    const result = await callEndpoint(data);

    setValues({
      ...result,
      ...data
    });

    reset();
  };

  return (
    <LoginFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="form-wrapper">
          <UsernameField register={register} errors={errors} />
          <PasswordField register={register} errors={errors} />
          <Button
            isDirty={isDirty}
            isValid={isValid}
            type="submit"
            className="login-button"
          >
            Login
          </Button>
        </Box>
      </form>
      <Box color="grey.600">
        {values.username && values.password && (
          <>
            <Typography variant="h5">
              User: {values.username}
            </Typography>
            <Typography variant="h5">
              Password: {values.password}
            </Typography>
          </>
        )}
      </Box>
    </LoginFormContainer>
  );
};
