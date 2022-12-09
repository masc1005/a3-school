import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  HomeTitle,
  HomeWrapper,
  MenuContainer,
  ClassesTable,
  HomeWrapperHeader,
} from "./style";

import { Header } from "../../components/header";

export const Modules = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/modules/10", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModules(data);
      });
  }, []);

  console.log(modules);

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeWrapper>
          <HomeWrapperHeader>
            <h1>back</h1>
            <h1>novo Módulo</h1>
          </HomeWrapperHeader>
          <HomeTitle>Classes</HomeTitle>
          <MenuContainer>
            {/* {modules.map((item) => {
              "";
              return (
                <ClassesTable>
                  <tbody>
                    <tr>
                      <th>Nome</th>
                      <th>Escola</th>
                      <th>Module</th>
                    </tr>
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.School.name}</td>
                      <td>{item.Module.name}</td>
                    </tr>
                  </tbody>
                </ClassesTable>
              );
            })} */}
          </MenuContainer>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};
