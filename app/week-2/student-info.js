import React from "react";
import styled from "styled-components";

const StudentInfo = () => {
  return (
    <>
      <Heading>Jessie Chonthicha</Heading>
      <Link href="https://github.com/ChonthichaJessie/cprg306-assignments.git">
        Github link
      </Link>
    </>
  );
};

export default StudentInfo;

const Heading = styled.h1`
  color: white;
`;

const Link = styled.a`
  color: white;
`;
