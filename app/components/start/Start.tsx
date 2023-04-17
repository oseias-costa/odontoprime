"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import ImgStart from "../../../public/start/photo-start-new.png";

export default function Start() {
  return (
    <Container>
      <Headline />
      <Img src={ImgStart} alt="Clínica LP Odonto Prime" />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 55px;
  flex-wrap: wrap;
`;

const Img = styled(Image)`
  width: 531px;
  height: 492.12px;
  @media (max-width: 720px) {
    width: 331px;
    height: 280px;
    display: none;
  }
`;

//831 x 700
