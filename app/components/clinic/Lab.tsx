"use client";
import React from "react";
import styled from "styled-components";
import { H4, Text } from "../global/Texts";
import Subtitle from "./Subtitle";
import PhotosClinic from "./PhotosClinic";
import ClinicPhotos from "./ClinicPhotos";

export default function Lab() {
  return (
    <Container id="Lab">
      <Subtitle
        title="Clínica Odontológica"
        content="Referência em implantes dentários e estética em Passo Fundo e região. Estrutura com o máximo de conforto e tecnologias para proporcionar o melhor atendimento aos pacientes. Raio-X panorâmico, laboratório de prótese e equipe especializadas, tudo isso em um só lugar!"
      />
      <ClinicPhotos />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  
`;
