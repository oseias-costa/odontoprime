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
`;

const TextContent = styled(Text)`
  width: 600px;
  paddint-top: 20px;
`;
