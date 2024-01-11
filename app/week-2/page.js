"use client";
import React from "react";
import styled from "styled-components";
import StudentInfo from "./student-info";

const Page = () => {
  return (
    <Wrapper>
      <Heading>Shopping List</Heading>
      <StudentInfo />
    </Wrapper>
  );
};

export default Page;

const Heading = styled.h1`
  color: white;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vW;
  background-color: black
  `;

