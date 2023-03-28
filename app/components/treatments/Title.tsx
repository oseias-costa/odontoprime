"use client";
import React from "react";
import { H2, H3 } from "../global/Texts";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <H3>Nosso Serviços</H3>
      <H2>Principais Tratamentos</H2>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;
