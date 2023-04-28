import TextField, { TextFieldProps } from "@mui/material/TextField";
import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

export type RhfTextFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T>;

const RhfTextField = <T extends FieldValues>(props: RhfTextFieldProps<T>) => {
  const { name, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...props}
          {...field}
          type={name === "password" ? "password" : "text"}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RhfTextField;
