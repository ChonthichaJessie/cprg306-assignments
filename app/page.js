"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Home = () => {
  return (
    <Wrapper>
      <Heading>CPRG 306: Web Development 2 - Assignments</Heading>
      <Assignment>
        <Link href="./week-2">Week 2 Assignment</Link>
        <Link href="">Week 3 Assignment</Link>
        <Link href="">Week 4 Assignment</Link>
        <Link href="">Week 5 Assignment</Link>
        <Link href="">Week 6 Assignment</Link>
        <Link href="">Week 7 Assignment</Link>
        <Link href="">Week 8 Assignment</Link>
        <Link href="">Week 9 Assignment</Link>
        <Link href="">Week 10 Assignment</Link>
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