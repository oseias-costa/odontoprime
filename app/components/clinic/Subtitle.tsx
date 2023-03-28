"use client";
import React from "react";
import styled from "styled-components";
import { H4, Text } from "../global/Texts";

export default function Subtitle({ title, content }) {
  return (
    <Container id="Lab">
      <H4>{title}</H4>
      <TextContent>{content}</TextContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
`;

const TextContent = styled(Text)`
  width: 600px;
  padding-top: 20px;
  color: #6b6b6e;
  font-size: 12pt;
  text-align: center;
  @media (max-width: 740px){
    width: auto;
    text-align: center;
    padding: 20px;
  }
`;
