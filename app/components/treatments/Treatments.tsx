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
        <Img src={item.image} />
          <H4>{item.title}</H4>
        <Content>
          <Description>{item.content}</Description>
        </Content>
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
  width: 200px;
  margin: 20px;
  text-align: center;
  border: 1px solid #e8e8ed;
  @media (max-width: 740px) {
    width: 150px;
    margin: 10px;
  }
`;

const Content = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  @media (max-width: 740px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
`;

const Img = styled(Image)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  @media (max-width: 740px) {
    width: 150px;
    height: 150px;
  }
`;

const Description = styled(SmallText)`
  margin-top: 20px;
  font-size: 10pt;
  @media (max-width: 740px) {
    font-size: 10pt;
  }
`;
