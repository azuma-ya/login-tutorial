import React from "react";
import { Stack, Button, Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../../../utils/validationSchema";
import RhfTextField from "../../ui/textField/RhfTextField";

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

interface RegisterFormProps {
  onRegister: (data: RegisterFormData) => void;
}

const RegisterForm = ({ onRegister }: RegisterFormProps) => {
  const { control, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (
    data: RegisterFormData
  ) => {
    onRegister(data);
  };

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
      sx={{ m: 2, width: "25ch" }}
    >
      <Box component="h2" sx={{ mx: "auto" }}>
        新規登録
      </Box>
      <RhfTextField control={control} name="username" label="名前" required />
      <RhfTextField
        control={control}
        name="email"
        label="メールアドレス"
        required
      />
      <RhfTextField
        control={control}
        name="password"
        label="パスワード"
        required
      />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  );
};

export default RegisterForm;
