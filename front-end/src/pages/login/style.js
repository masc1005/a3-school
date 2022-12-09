import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  font-weight: bold;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    color: #999;
    font-weight: normal;
    margin-top: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  background: #fff;
  padding: 100px;
  border-radius: 4px;
`;

export const Input = styled.input`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #444;
  margin: 0 0 10px;
  &::placeholder {
    color: #999;
  }
`;
export const ButtonLogin = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #f05a5b;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: #e14f50;
  }
`;
