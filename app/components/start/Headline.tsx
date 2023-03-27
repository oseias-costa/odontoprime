import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button'
import { H3 } from '../global/Texts'
import Blocks from './Blocks'

export default function Headline() {
  return (
    <Container>
        <H3>Bem-vindo</H3>
        <Title>O sorriso dos sonhos é na&nbsp;</Title>
        <Emphasis>LP OdontoPrime</Emphasis>
        <Description>
            Referência em Passo Fundo e região,  a Cliníca LP OdontoPrime é completa em tratamentos.
        </Description>
        <Blocks />
        <Button href='#' text='Agende uma Avaliação' />
    </Container>
  )
}

const Container = styled.div`
    max-width: 400px;
    @media (max-width: 720px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
    }
`

const Title = styled.h1`
    font-family: var(--font-apollo);
    font-size: 42px;
    color: #464647;
    display: inline;
`

const Emphasis = styled(Title)`
    color: #B2821F;
`

const Description = styled.p`
    color: #6B6B6E;
    font-size: 18px;
    padding-top: 18px;
`