"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import LogoGray from "../../../public/footer/logo2.png";
import Insta from "../../../public/footer/insta.png";
import Face from "../../../public/footer/face.png";
import Location from "../../../public/footer/Location.png";
import { SmallText } from "../global/Texts";

export default function Footer() {
  return (
    <Container>
      <LogoBlock>
        <Img src={LogoGray} alt="Logo" />
        <SmallText>CLINICA@LPODONTOPRIME.COM.BR</SmallText>
        <SmallText>(54) 9 9928-4494</SmallText>
        <div>
          <a href="https://www.instagram.com/lpodontoprime.pf/" target="_blank">
            <Icon src={Insta} alt="" size="30px" />
          </a>
          <a
            href="https://www.facebook.com/oralbrasilpassofundo"
            target="_blank"
          >
            <Icon src={Face} alt="" size="30px" />
          </a>
        </div>
      </LogoBlock>
      <LinksBlock>
        <a href="#Inicio">Início</a>
        <a href="#Tratamentos">Tratamentos</a>
        <a href="#Clinica">Clínica</a>
        <a href="#Como-Chegar">Como Chegar</a>
      </LinksBlock>
      <div>
        <Address>
          <Icon src={Location} alt="" size="30px" />
          <SmallText>
            Rua Independência, 25
            <br />
            Centro 99010-041
            <br /> Passo Fundo - RS
          </SmallText>
        </Address>
        <RT>
          <p>EPAO 5034</p>
          <p>RT Laís Algayer Raguze</p>
          <p>CRO RS 24917</p>
        </RT>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  margin-top: 60px;
  display: flex;
  background-color: #d9d9d9;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 30px;
  }
`;

const Img = styled(Image)`
  width: 350px;
  height: auto;
  @media (max-width: 740px) {
    width: 250px;
  }
`;

const LogoBlock = styled.div`
  div {
    display: flex;
    padding-top: 10px;
    @media (max-width: 740px) {
      justify-content: center;
    }
  }
  @media (max-width: 740px) {
    padding-top: 40px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Icon = styled(Image)<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin-right: 10px;
  @media (max-width: 740px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-transform: uppercase;
    color: #464647;
    padding: 5px;
  }

  @media (max-width: 740px) {
    text-align: center;
    margin-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const Address = styled.div`
  display: flex;
`;

const RT = styled.div`
  padding-top: 15px;
  padding-left: 40px;
  p {
    color: #464647;
  }

  @media (max-width: 740px) {
    text-align: center;
    padding-left: 0px;
  }
`;
