"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import LogoGray from '../../../public/footer/logo2.png'
import Insta from '../../../public/footer/insta.png'
import Face from '../../../public/footer/face.png'
import Location from '../../../public/footer/location.png'
import { SmallText } from '../global/Texts';

export default function Footer() {
  return (
    <Container>
        <LogoBlock>
            <Img src={LogoGray} alt='Logo' />
            <SmallText>LPODONTOPRIME.PF@GMAIL.COM</SmallText>
            <SmallText>(54) 9 9628-4494</SmallText>
            <div>
                <a href='#'><Icon src={Insta} alt='' size='30px' /></a>
                <a href='#'><Icon src={Face} alt='' size='30px' /></a>
            </div>
        </LogoBlock>
        <LinksBlock>
            <a href='#Inicio'>Início</a>
            <a href='#Tratamentos'>Tratamentos</a>
            <a href='#Clinica'>Clínica</a>
            <a href='#Como-Chegar'>Como Chegar</a>
        </LinksBlock>
        <Address>
            <Icon src={Location} alt='' size='30px' />
            <SmallText>Rua Idependência 25<br />Centro
99010-041<br /> Passo Fundo -RS</SmallText>
        </Address>
    </Container>
  )
}

const Container = styled.footer`
    margin-top: 60px;
    display: flex;
    background-color: #D9D9D9;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 40px;
    @media(max-width: 740px){
        padding: 20px;


    }
`

const Img = styled(Image)`
    width: 350px;
    height: auto;
`

const LogoBlock = styled.div`

        div{
            display: flex;
            padding-top: 10px;
            @media (max-width:740px){
            justify-content: center;
        }
        }
        @media (max-width:740px){
            padding-top: 40px;
            text-align: center;
            margin-bottom: 30px;
        }
`

const Icon = styled(Image)<{size: string}>`
    width: ${props => props.size};
    height: ${props => props.size};
    margin-right: 10px;
    @media (max-width:740px){
        margin-left: 5px;
        margin-right: 5px;
    }
`

const LinksBlock = styled.div`
    display: flex;
    flex-direction: column;
    
    a {
        text-transform: uppercase;
        color: #464647;
        padding: 5px;
    }

    @media (max-width:740px){
            text-align: center;
            margin-bottom: 30px;
            padding-left: 50px;
            padding-right: 50px;
        }
    `

const Address = styled.div`
    display: flex;
    
`