import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 30px;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 50px;
  font-weight: normal;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;
export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  color: #fff;
  outline: none;
  display: inline-block;
  border: none;
  margin-top: 10px;
`;
