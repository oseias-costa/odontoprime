import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { H4, SmallText } from "../global/Texts";
import Subtitle from "./Subtitle";
import { dentist } from "./_data";

export default function Dentists() {
  const block = dentist.map((item) => {
    return (
      <Block>
        <Img src={item.image} alt={item.name} />
        <Description>
          <Title>{item.name}</Title>
          <Text>{item.description}</Text>
        </Description>
      </Block>
    );
  });

  return (
    <Container>
      <Subtitle
        title="Equipe Especializada"
        content="Contamos com uma equipe de alto nível com técnicas modernas."
      />
      <DentistsBlocks>{block}</DentistsBlocks>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 60px;
`;

const DentistsBlocks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Block = styled.div`
  width: 250px;
  text-align: center;
  margin: 10px;
  border: 1px solid #e8e8ed;
  @media (max-width: 740px) {
    width: 150px;
  }
`;

const Description = styled.div`
  padding: 20px;
  @media (max-width: 740px) {
    padding: 5px;
  }
`;

const Img = styled(Image)`
  width: 250px;
  height: 260px;
  @media (max-width: 740px) {
    width: 150px;
    height: 156px;
  }
`;

const Text = styled(SmallText)`
  padding: 10px;
  font-size: 12pt;
  @media (max-width: 740px) {
    font-size: 10pt;
    padding: 5px;
  }
`;

const Title = styled(H4)`
  @media (max-width: 740px) {
    font-size: 12pt;
  }
`;
