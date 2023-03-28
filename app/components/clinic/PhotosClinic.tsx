"use client";
import { useState } from "react";
import styled from "styled-components";
import { lab } from "./_data";
import Image from "next/image";

export default function PhotosClinic() {
  const [img, setImg] = useState(0);

  return (
    <>
      <Container id="PhotosClinic">
        <Img src={lab[img].image1} alt="Foto Clínica OdontoPrime" />
        <Img src={lab[img].image2} alt="Foto Clínica OdontoPrime" />
      </Container>
      <ChangePhoto img={img} setImg={setImg} />
    </>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const Img = styled(Image)`
  height: 300px;
  width: 450px;
  margin: 20px;
`;

const ChangePhoto = ({ img, setImg }) => {
  console.log(img);
  const imgNext = img + 1;
  const nextImage = () => {
    if (img < 2) {
      return setImg(imgNext);
    } else {
      return setImg(0);
    }
  };

  const lastImage = () => {
    if (img == 0) {
      setImag(3);
    } else {
      setImg(img - 1);
    }
  };

  return (
    <ContainerCP>
      <button onClick={() => lastImage()}>Antes</button>
      <button onClick={() => nextImage()}>Próxima</button>
    </ContainerCP>
  );
};

const ContainerCP = styled.div`
  text-align: center;
`;
