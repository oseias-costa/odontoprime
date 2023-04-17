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
        title="Laboratório Próprio"
        content="A Clínica LP Odonto Prime conta com um laboratório próprio oferecendo
        mais segurança e rapidez no diagnóstico de tratamento para o paciente."
      />
      <ClinicPhotos />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  
`;
