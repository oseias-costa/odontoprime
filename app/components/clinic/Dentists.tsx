import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { H4, SmallText } from '../global/Texts'
import Subtitle from './Subtitle'
import { dentist } from './_data'

export default function Dentists() {
    const block = dentist.map((item) => {
        return(
                <Block>
                    <Img src={item.image} alt={item.name} />
                    <Description>
                        <H4>{item.name}</H4>
                        <SmallText>{item.description}</SmallText>
                    </Description>
                </Block>
        )
    })

  return (
    <Container>
        <Subtitle title='Equipe Especializada' content='Contamos com uma equipe de alto nível com técnicas modernas.' />
        <DentistsBlocks>{block}</DentistsBlocks>
    </Container>
  )
}

const Container = styled.div`
    padding-top: 60px;
`

const DentistsBlocks = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Block = styled.div`
    width: 250px;
    text-align: center;
    margin: 10px;
`

const Description = styled.div`
    padding: 20px;
`

const Img = styled(Image)`
    width: 250px;
    height: 260px;
`