"use client";
import React from "react";
import styled from "styled-components";
import { H2, H3, H4, SmallText } from "../components/global/Texts";
import Blocks from "../components/start/Blocks";
import Button from "../components/global/Button";
import Image from "next/image";
import ImgStart from "/public/implants/start-h.png";

export default function Implantes() {
  return (
    <div>
      <Headline>
        <Container>
          <TitleContainer>
            <Title>Recupere seu sorriso com prótese fixa por </Title>
            <Emphasis>Implantes!</Emphasis>
            <Description>
              Referência em Passo Fundo e região, a Clínica LP Odonto Prime é
              especialista em próteses e implantes dentário. Clique abaixo para
              saber mais informações.
            </Description>
          </TitleContainer>
          <Button
            href="https://wa.me/5554999284494?text=Ol%C3%A1%2C%20estava%20em%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            text="Agende uma Avaliação"
          />
        </Container>
        <ImgHeadline src={ImgStart} alt="Odonto Prime" />
      </Headline>
      <Testimonials>
        <H2>Depoimentos</H2>
        <TestimonialsBox></TestimonialsBox>
      </Testimonials>
      <Benefits>
        <H2>Benefícios da prótese</H2>
        <BenefitsItems>
          <BenefitsItem>
            <H4>Aparência Natural</H4>
            <DescriptionBenefits>
              A prótese fixa por implantes é projetada para se parecer com
              dentes naturais, proporcionando um sorriso estético e harmonioso.
              Isso ajuda a restaurar a confiança do paciente, permitindo que ele
              sorria e socialize sem constrangimentos.
            </DescriptionBenefits>
          </BenefitsItem>
          <BenefitsItem>
            <H4>Conforto e Funcionalidade</H4>
            <DescriptionBenefits>
              Diferente das dentaduras removíveis, a prótese fixa é fixada de
              forma permanente aos implantes, oferecendo maior estabilidade.
              Isso resulta em uma mastigação mais eficiente e confortável,
              permitindo que os pacientes desfrutem de uma dieta variada sem
              preocupações.
            </DescriptionBenefits>
          </BenefitsItem>
          <BenefitsItem>
            <H4>Durabilidade e Longevidade</H4>
            <DescriptionBenefits>
              Com cuidados adequados, as próteses fixas por implantes podem
              durar muitos anos, tornando-se uma solução a longo prazo para a
              perda de dentes. Os implantes são feitos de materiais
              biocompatíveis, que são altamente resistentes e suportam a pressão
              da mastigação, garantindo sua funcionalidade ao longo do tempo.
            </DescriptionBenefits>
          </BenefitsItem>
        </BenefitsItems>
        <Button
          href="https://wa.me/5554999284494?text=Ol%C3%A1%2C%20estava%20em%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
          text="Quero mais informações"
        />
      </Benefits>
    </div>
  );
}

const Headline = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  background-color: #d3d3d3;
  align-items: flex-end;
  z-index: 1;
  flex-wrap: wrap-reverse;
`;

const ImgHeadline = styled(Image)`
  width: 546px;
  height: 400px;
`;

const Container = styled.div`
  position: relative;
  left: 25px;
  position: relative;
  top: 50px;
  @media (max-width: 720px) {
    padding-top: 40px;
    padding-bottom: 40px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    left: 0px;
  }
`;

const TitleContainer = styled.div`
  max-width: 550px;
`;

const Title = styled.h1`
  font-family: var(--font-apollo);
  font-size: 42px;
  color: #464647;
  display: inline;
`;

const Emphasis = styled(Title)`
  color: #b2821f;
`;

const Description = styled.p`
  color: #6b6b6e;
  font-size: 18px;
  padding-top: 18px;
  padding-bottom: 50px;
`;

const Benefits = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;

  @media (max-width: 740px) {
    text-align: center;
  }
`;

const BenefitsItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-v: 80px;
  padding-bottom: 40px;
`;

const BenefitsItem = styled.div`
  margin: 20px;
  max-width: 300px;
`;

const DescriptionBenefits = styled(SmallText)`
  margin-top: 20px;
  font-size: 11pt;
  @media (max-width: 740px) {
    font-size: 9pt;
  }
`;

const Testimonials = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

const TestimonialsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 40px;
`;