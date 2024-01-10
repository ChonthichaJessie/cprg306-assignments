"use client";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Heading>CPRG 306: Web Development 2 - Assignments</Heading>
      <Assignment>
        <a href="./week-2">Week 2 Assignment</a>
        <a>Week 3 Assignment</a>
        <a>Week 4 Assignment</a>
        <a>Week 5 Assignment</a>
        <a>Week 6 Assignment</a>
        <a>Week 7 Assignment</a>
        <a>Week 8 Assignment</a>
        <a>Week 9 Assignment</a>
        <a>Week 10 Assignment</a>
      </Assignment>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vw;
  background-color: black;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
  color: white;
  margin-left: 30px;
`;

const Assignment = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 30px;
`;
