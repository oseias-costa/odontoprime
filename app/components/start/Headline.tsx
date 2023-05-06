import React from "react";
import styled from "styled-components";
import Button from "../global/Button";
import { H3 } from "../global/Texts";
import Blocks from "./Blocks";

export default function Headline() {
  return (
    <Container>
      <TitleContainer>
        <H3>Bem-vindo</H3>
        <Title>O sorriso dos sonhos é na&nbsp;</Title>
        <Emphasis>LP Odonto Prime</Emphasis>
        <Description>
          Referência em Passo Fundo e região, a Cliníca LP Odonto Prime é especialista em sorrisos.
        </Description>
      </TitleContainer>
      <Blocks />
      <Button href="https://wa.me/5554999284494" text="Agende uma Avaliação" />
    </Container>
  );
}

const Container = styled.div`
    position: relative;
    left: 25px;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    left: 0px;
  }
`;

const TitleContainer = styled.div`
  max-width: 420px;
`

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
