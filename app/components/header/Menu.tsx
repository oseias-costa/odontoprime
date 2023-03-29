import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button'

export default function Menu() {
  return (
    <Nav>
        <Ul>
            <Li><LinkNav href='#Tratamentos'>Tratamentos</LinkNav></Li>
            <Li><LinkNav href='#Clinica'>Clínica</LinkNav></Li>
            <Li><LinkNav href='#Como-Chegar'>Contato</LinkNav></Li>
        </Ul>
        <Button href='#' text='Agende uma Avaliação' />
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    @media (max-width: 720px){
        display: none;
    }
`

const Ul = styled.ul`
    display: flex;
`

const Li = styled.li`
    padding: 20px;
    &:last-child{
        margin-right: 20px;
    }
`

const LinkNav = styled.a`
    color: #464647;
    cursor: pointer;
    transition: 0.2s linear;

    &:hover{
        color:#B2821F;

    }
`


