"use client";
import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Lab from "./Lab";

export default function Clinic() {
  return (
    <Container>
      <Title />
      <Lab />
    </Container>
  );
}

const Container = styled.section`
  padding-top: 60px;
`;
