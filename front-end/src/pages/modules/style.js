import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #00ab8e;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  height: 70%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;

export const HomeWrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 20px;
  top: -1000px;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #00ab8e;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 20px;
`;

export const ClassesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: 0.9em;
  font-family: sans-serif;
  text-align: center;
`;
