import Button from "../components/Button";
import Input from "../components/Input";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  const handleLoginForm = (data: any) => {
    alert("Dados validados!");
    reset();
  };

  return (
    <Container>
      <h1>Efetuar login</h1>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        <Input
          label="E-mail"
          name="email"
          type="email"
          errorMessage={errors?.email}
          register={register}
          autoFocus
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          errorMessage={errors?.password}
          register={register}
        />
        {isValid ? (
          <Button>Efetuar login</Button>
        ) : (
          <Button disabled>Efetuar login</Button>
        )}
      </form>
    </Container>
  );
};

export default Login;
