"use client";
import React from "react";
import styled from "styled-components";

export default function Local() {
  return (
    <Container id="Local">
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14057.02950814486!2d-52.409571030224605!3d-28.260211599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2bf80fbdc00e1%3A0x15f49c58312e8190!2sR.%20Independ%C3%AAncia%2C%2025%20-%20Centro%2C%20Passo%20Fundo%20-%20RS%2C%2099010-041!5e0!3m2!1spt-BR!2sbr!4v1680028336456!5m2!1spt-BR!2sbr"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Iframe>
    </Container>
  );
}

const Container = styled.section``;

const Iframe = styled.iframe`
  width: 600px;
  height: 450px;
  @media (max-width: 740px) {
    width: auto;
    height: auto;
  }
`;
