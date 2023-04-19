
"use client";
import React from 'react'
import { lab } from "./_data";
import Image from "next/image";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";


export default function ClinicPhotos() {
    const swiperItems = lab.map(item => {
      return(
          <SwiperSlide key={item.id}>
                  <Img src={item.image1} alt='Clínica LP Odonto Prime' />
                  <Img src={item.image2} alt='Clínica LP Odonto Prime' />
          </SwiperSlide>
      )
  }) 
  return (
    <Container>
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true} 
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]} 
        className="mySwiper"
      >
        { swiperItems }
      </Swiper>
    </Container>
  );
}

const Img = styled(Image)`
  height: 300px;
  width: 533.05px;
  margin: 5px;
  border-radius: 5px;
  transition: 0.3s linear;
  @media (max-width: 740px) {
    width: 325px;
    height: 182.91px;
  }
`;

const Container = styled.section`


`
