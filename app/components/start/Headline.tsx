import React from "react";
import styled from "styled-components";
import Button from "../global/Button";
import { H3 } from "../global/Texts";
import Blocks from "./Blocks";

export default function Headline() {
  return (
    <Container>
      <H3>Bem-vindo</H3>
      <Title>O sorriso dos sonhos é na&nbsp;</Title>
      <Emphasis>LP OdontoPrime</Emphasis>
      <Description>
        Referência em Passo Fundo e região, a Cliníca LP OdontoPrime é completa
        em tratamentos.
      </Description>
      <Blocks />
      <Button href="https://wa.me/555499628-4494" text="Agende uma Avaliação" />
    </Container>
  );
}

const Container = styled.div`
  max-width: 400px;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: var(--font-apollo);
  font-size: 42px;
  color: #464647;
  display: inline;
`;

const Emphasis = styled(Title)`
  color: #b2821f;
`;

const Description = styled.p`
  color: #6b6b6e;
  font-size: 18px;
  padding-top: 18px;
`;
