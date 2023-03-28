"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Description from "./Description";

export default function Testimonials() {
  return (
    <Container id="testimonials">
      <iframe
        width="460"
        height="258"
        src="https://www.youtube.com/embed/YChGjCYDHHQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Description />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
  
  @media(max-width: 740px){
      
  }
`;
