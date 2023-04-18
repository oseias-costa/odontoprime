"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";
import { data } from "./_data";

type BlocksProp = {
  id: number;
  icon: StaticImageData;
  content: string;
};

export default function Blocks() {
  const blocks = data.map((item: BlocksProp) => {
    return (
      <Block key={item.id}>
        <Img src={item.icon} alt={item.content} />
        <Text>{item.content}</Text>
      </Block>
    );
  });
  return <Container>{blocks}</Container>;
}

const Container = styled.div`
  max-width: 600px;
  display: flex;
  padding-top: 30px;
  padding-bottom: 40px;
`;
const Block = styled.div`
  max-width: 180px;
  text-align: left;
  padding-right: 20px;
  @media (max-width: 720px) {
    max-width: 100px;
    text-align: center;
    padding: 5px;
  }
`;

const Img = styled(Image)`
  width: 60px;
  height: 60px;
`;

const Text = styled.p`
  color: #6b6b6e;
  font-size: 10pt;
  @media (max-width: 720px) {
    font-size: 9pt;
  }
`;
