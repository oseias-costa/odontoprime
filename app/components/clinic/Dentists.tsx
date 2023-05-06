import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { H4, SmallText } from "../global/Texts";
import Subtitle from "./Subtitle";
import { dentist } from "./_data";

export default function Dentists() {
  const block = dentist.map((item) => {
    return (
      <Block key={item.id}>
        <Img src={item.image} alt={item.name} />
        <Description>
          <Title>{item.name}</Title>
          <Text>{item.description}</Text>
        </Description>
        <DivSolid />
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
  max-width: 900px;
  margin: 0 auto;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  text-align: center;
  margin: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 10px 10px 0 0;
  @media (max-width: 740px) {
    width: 150px;
  }
`;

const Description = styled.div`
  margin-bottom: auto;
  padding: 20px;
  @media (max-width: 740px) {
    padding: 5px;
  }
`;

const Img = styled(Image)`
  width: 248px;
  height: 260px;
  border-radius: 10px 10px 0 0;
  @media (max-width: 740px) {
    width: 148px;
    height: 156px;
  }
`;

const Text = styled(SmallText)`
  padding: 10px;
  font-size: 12pt;
  @media (max-width: 740px) {
    font-size: 9pt;
    padding: 5px;
  }
`;

const Title = styled(H4)`
  @media (max-width: 740px) {
    font-size: 12pt;
  }
`;

const DivSolid = styled.div`
  background-color: #d9d9d9;
  height: 10px;
`