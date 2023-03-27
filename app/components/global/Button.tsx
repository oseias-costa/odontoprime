import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
    text: string,
    href: string
}

export default function Button({text, href}: ButtonProps) {
  return (
    <div>
        <ButtonBody href={href}>{text}</ButtonBody>
    </div>
  )
}

const ButtonBody = styled.a`
    background: linear-gradient(0deg, rgba(170, 170, 173, 0.2), rgba(170, 170, 173, 0.2)), linear-gradient(270deg, #B2821F 49.81%, #E9CD4C 82.32%);
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #464647;
    
    @media(max-width: 720px){
        width: auto;
    }
`

