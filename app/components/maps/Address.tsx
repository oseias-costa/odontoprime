"use client";
import React from "react";
import styled from "styled-components";
import { H4, Text } from "../global/Texts";
import Google from "../../../public/maps/maps.svg";
import Waze from "../../../public/maps/waze.png";
import Image from "next/image";

export default function Address() {
  return (
    <Container id="Address">
      <Description
        title="Endereço"
        text="Rua Idependência, 25 - Centro 99010-041 - Passo Fundo"
      />
      <Description title="Telefone" text="(54) 9 9628-4494" />
      <IconsContainer>
        <a href="https://goo.gl/maps/htN5by1yBAefTKtk8">
          <Icon src={Google} alt="Localização Google Maps" />
        </a>
        <a href="https://www.waze.com/en/live-map/directions/br/rs/r.-independencia,-25?place=ChIJ4QDc-4C_4pQRkIEuMVic9BU">
          <WazeIcon src={Waze} alt="Localização Waze" />
        </a>
      </IconsContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 740px){
    justify-content: center;
  }
  `;


const IconsContainer = styled.div`
  display: flex;
  padding: 40px;
  @media(max-width: 740px){
    padding: 10px;
  }
`;

const Icon = styled(Image)`
  width: 120px;
  height: auto;
`;

const WazeIcon = styled(Icon)`
  width: 120px;
  height: auto;
  position: relative;
  bottom: -10px;
  padding-left: 20px;
`;

const Description = ({ title, text }) => {
  return (
    <DescriptionContainer>
      <H4>{title}</H4>
      <DescriptionText>{text}</DescriptionText>
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  padding: 40px;
  max-width: 350px;
  @media(max-width: 740px) {
    text-align: center;
    padding: 10px;
  }
`

const DescriptionText = styled(Text)`
  padding-top: 5px;
  padding-bottom: 30px;
`;