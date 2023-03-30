"use client";
import { useState } from "react";
import styled from "styled-components";
import { lab } from "./_data";
import Image from "next/image";
import Arrow from "../../../public/clinic/lab/next.svg";

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
  flex-wrap: wrap;
`;

const Img = styled(Image)`
  height: 300px;
  width: 450px;
  margin: 5px;
  border-radius: 5px;
  transition: 0.3s linear;
  @media (max-width: 740px) {
    width: 325px;
    height: 217px;
  }
`;

type ChangePhotoProps = {
  img: number;
  setImg: (img: number) => void;
  // _id: number;
};

const ChangePhoto = ({ img, setImg }: ChangePhotoProps) => {
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
    if (img > 0) {
      setImg(img - 1);
    } else {
      setImg(2);
    }
  };

  return (
    <ContainerCP>
      <Btn onClick={() => lastImage()}>
        <BtnLast src={Arrow} alt="Próxima Foto" />
      </Btn>
      <ButtonsDiv>
        <CircleBtn _id={0} img={img} onClick={() => setImg(0)} />
        <CircleBtn _id={1} img={img} onClick={() => setImg(1)} />
        <CircleBtn _id={2} img={img} onClick={() => setImg(2)} />
      </ButtonsDiv>
      <Btn onClick={() => nextImage()}>
        <BtnNext src={Arrow} alt="Próxima Foto" />
      </Btn>
    </ContainerCP>
  );
};

const ContainerCP = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const ButtonsDiv = styled.div`
  display: flex;
`;

const CircleBtn = styled("button")<{ img: number; _id: number }>`
  background-color: ${(props) =>
    props.img === props._id ? "#B2821F" : "#D9D9D9"};
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 5px;
  cursor: pointer;
`;
const Btn = styled.button`
  background-color: transparent;
`;

const BtnNext = styled(Image)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: transparent;
  margin-left: 20px;
  margin-right: 20px;
`;
const BtnLast = styled(BtnNext)`
  transform: rotate(180deg);
`;
