import React from "react";
import styled from "styled-components";
import Button from "../global/Button";
import { H2, H3, Text } from "../global/Texts";

export default function Description() {
  return (
    <Container>
      <H3>Depoimentos</H3>
      <H2>Veja o que nossos pacientes falam de nós</H2>
      <TextDescription>
        Acreditamos que com um sorriso mais bonito a autoconfiança aumenta e o
        medo de sorrir desaparece.
      </TextDescription>
      <Button href="#" text="Quero mais informações" />
    </Container>
  );
}

const Container = styled.div`
  max-width: 380px;
  margin-left: 75px;
  position: relative;
  top: -5px;
  @media (max-width: 720px) {
    margin-left: 0;
    text-align: center;
    margin-top: 35px;
  }
`;

const TextDescription = styled(Text)`
  padding-bottom: 30px;
  padding-top: 20px;
`;
