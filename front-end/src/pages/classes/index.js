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

export const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/class", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  console.log(classes);

  return (
    <>
      <Header />
      <HomeContainer>
        <HomeWrapper>
          <HomeWrapperHeader>
            <h1>back</h1>
            <h1>nova classe</h1>
          </HomeWrapperHeader>
          <HomeTitle>Classes</HomeTitle>
          <MenuContainer>
            {classes.map((item) => {
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
            })}
          </MenuContainer>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};
