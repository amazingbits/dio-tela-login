import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error: string | null;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({
  name,
  label,
  error,
  value,
  setValue,
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...rest}
      />
      {error && <p>{error}</p>}
    </InputContainer>
  );
};

export default Input;
