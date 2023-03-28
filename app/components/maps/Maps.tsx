"use client";
import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Local from "./Local";
import Address from "./Address";

export default function Maps() {
  return (
    <Container id="Maps">
      <Title />
      <Content>
        <Address />
        <Local />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 60px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;
