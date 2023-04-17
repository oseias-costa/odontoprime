"use client";
import React from "react";
import { data } from "./_data";
import styled from "styled-components";
import { SmallText, H4 } from "../global/Texts";
import Image from "next/image";
import Title from "./Title";

export default function Treatments() {
  const block = data.map((item) => {
    return (
      <BlockBody key={item.id}>
        <Img src={item.image} alt={item.title} />
        <Content>
          <H4>{item.title}</H4>
          <Description>{item.content}</Description>
        </Content>
        <DivSolid />
      </BlockBody>
    );
  });
  return (
    <Container id="Tratamentos">
      <Title />
      <ContainerBlocks>{block}</ContainerBlocks>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 60px;
`;

const ContainerBlocks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BlockBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  margin: 20px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 10px 10px 0 0;

  @media (max-width: 740px) {
    width: 150px;
    margin: 10px;
  }
`;

const Content = styled.div`
  margin-bottom: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  @media (max-width: 740px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
`;

const Img = styled(Image)`
  width: 198px;
  height: 198px;
  margin-bottom: 20px;
  border-radius: 10px 10px 0 0;
  @media (max-width: 740px) {
    width: 148px;
    height: 148px;
  }
`;

const Description = styled(SmallText)`
  margin-top: 20px;
  font-size: 11pt;
  @media (max-width: 740px) {
    font-size: 9pt;
  }
`;

const DivSolid = styled.div`
  background-color: #d9d9d9;
  height: 10px;
  width: 100%;
  margin-bottom: 0;
`