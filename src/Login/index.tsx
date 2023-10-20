import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Container } from "./styles";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <h1>Efetuar login</h1>
      <form>
        <Input
          label="E-mail"
          name="email"
          type="email"
          error={null}
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          error={null}
          value={password}
          setValue={setPassword}
        />
        <Button>Efetuar login</Button>
      </form>
    </Container>
  );
};

export default Login;
