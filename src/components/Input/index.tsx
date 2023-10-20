import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  register: UseFormRegister<FieldValues>;
}

const Input = ({
  name,
  label,
  errorMessage,
  register,
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input type="text" {...register(name)} {...rest} />
      {errorMessage && <p>{errorMessage.message?.toString()}</p>}
    </InputContainer>
  );
};

export default Input;
