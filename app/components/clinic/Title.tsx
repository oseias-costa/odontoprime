"use client";
import React from "react";
import { H2, H3 } from "../global/Texts";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <H3>Sobre a Clínica</H3>
      <H2>LP Odonto Prime</H2>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;
