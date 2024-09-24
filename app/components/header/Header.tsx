"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import LogoIcon from "../../../public/start/logo.png";
import Menu from "./Menu";

export default function Header() {
  return (
    <Container id="Inicio">
      <Logo src={LogoIcon} alt="Logo Clínica LP OdontoPrime" />
      <Menu />
    </Container>
  );
}

const Container = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 30px 5px rgba(170, 170, 173, 0.5);
  z-index: 2;
`;

const Logo = styled(Image)`
  width: 250px;
  height: 47px;
`;
