'use client'
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapping>
      <Content>Hello world</Content>
      <Content>Welcome to CPRG306</Content>
    </Wrapping>
  );
};
export default Home;

export const Content = styled.p`
  font-size: 80px;
`
export const Wrapping = styled.div`
  width: 100%;
  height: 1800px;
  background: pink;
`
