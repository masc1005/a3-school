import React, { useState } from "react";
import { Container, Form, Input, ButtonLogin, Title } from "./style";

export const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (data.ok === true) {
      localStorage.setItem("token", data.token);
      window.location.href = "/home";
    }
  };

  return (
    <Container>
      <Form>
        <Title>Bem vindo ao MarkSchool</Title>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <ButtonLogin type="submit" onClick={handleLogin}>
          Entrar
        </ButtonLogin>
      </Form>
    </Container>
  );
};
