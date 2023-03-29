"use client";
import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Lab from "./Lab";
import Dentists from "./Dentists";

export default function Clinic() {
  return (
    <Container id="Clinica">
      <Title />
      <Lab />
      <Dentists />
    </Container>
  );
}

const Container = styled.section`
  padding-top: 60px;
`;
