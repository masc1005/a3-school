import React from "react";
import decode from "jwt-decode";

import { Header } from "../../components/header";

import {
  HomeContainer,
  HomeWrapper,
  HomeTitle,
  MenuButton,
  MenuContainer,
} from "./style";

export const Home = () => {
  if (!localStorage.getItem("token")) {
    return (window.location.href = "/");
  }

  const token = localStorage.getItem("token");

  const decoded = decode(token);

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeWrapper>
          <HomeTitle>Bem vindo: {decoded.name}</HomeTitle>
          <MenuContainer>
            <MenuButton
              onClick={() => {
                window.location.href = "/classes";
              }}
            >
              <h1>Classes</h1>
            </MenuButton>
            <MenuButton
              onClick={() => {
                window.location.href = "/modules";
              }}
            >
              <h1>Modulos</h1>
            </MenuButton>
            {decoded.role === "ADMIN" || decoded.role === "PROFESSOR" ? (
              <MenuButton
                onClick={() => {
                  window.location.href = "/schools";
                }}
              >
                <h1>Escolas</h1>
              </MenuButton>
            ) : (
              <MenuButton
                onClick={() => {
                  window.location.href = "/notes";
                }}
              >
                <h1>Notas</h1>
              </MenuButton>
            )}
            {decoded.role === "ADMIN" || decoded.role === "PROFESSOR" ? (
              <MenuButton
                onClick={() => {
                  window.location.href = "/students";
                }}
              >
                <h1>Alunos</h1>
              </MenuButton>
            ) : null}
            {decoded.role === "ADMIN" ? (
              <MenuButton
                onClick={() => {
                  window.location.href = "/teachers";
                }}
              >
                <h1>Professores</h1>
              </MenuButton>
            ) : null}
          </MenuContainer>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};
