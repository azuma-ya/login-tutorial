import React from "react";
import RegisterFormContainer from "../components/register/container/RegisterFormContainer";
import { Box } from "@mui/material";

const Register = () => {
  const handleRegister = (err?: Error) => {
    if (!err) {
      console.log("新規登録に成功しました。");
    } else {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RegisterFormContainer onRegister={handleRegister} />
    </Box>
  );
};

export default Register;
