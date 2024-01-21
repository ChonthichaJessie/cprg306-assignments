"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Home = () => {
  return (
    <dev class="h-screen bg-black md:flex flex-col">
      <h1 class ="text-xl font-bold mt-5 ml-5 text-white" >CPRG 306: Web Development 2 - Assignments</h1>
      <div class ="md:flex flex-col text-white mt-5 ml-10">
        <Link href="./week-2">Week 2 Assignment</Link>
        <Link href="./week-3">Week 3 Assignment</Link>
        <Link href="">Week 4 Assignment</Link>
        <Link href="">Week 5 Assignment</Link>
        <Link href="">Week 6 Assignment</Link>
        <Link href="">Week 7 Assignment</Link>
        <Link href="">Week 8 Assignment</Link>
        <Link href="">Week 9 Assignment</Link>
        <Link href="">Week 10 Assignment</Link>
      </div>
    </dev>
  );
};

export default Home;