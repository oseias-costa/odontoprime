"use client";
import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Local from "./Local";
import Address from "./Address";

export default function Maps() {
  return (
    <Container id="Como-Chegar">
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;
