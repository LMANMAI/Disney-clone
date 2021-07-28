import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0;
  opacity: 0.9;
  position: fixed;
  right: 0;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImgTittle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const ControlMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
`;
const Play = styled.button`
  font-size: 14px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  border: none;
  outline: none;
  text-transform: uppercase;
  background-color: rgb(249, 249, 249);
  color: #000;
  img {
    width: 30px;
  }
  &:hover {
    background-color: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0 15px;
    font-size: 12px;
    margin: 0px 25px 0px 0px;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Play)`
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: 1px solid rgb(249, 249, 249);
`;
const AddListButton = styled.div`
  margin-right: 1rem;
  height: 44px;
  width: 44px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  border: 1px solid rgb(249, 249, 249);
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px);
    }
  }
`;
const SubTittle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  font-size: 20px;
  line-height: 1.4;
  padding: 16px 0px;
  color: rgba(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data());
        } else {
          console.log("No existe la coleccion en Firebase");
        }
      })
      .catch((error) => {
        console.log(`Error obteniendo los documentos: ${error}`);
      });
  }, [id]);
  console.log(data);
  const { titleImg, subTitle, description, backgroundImg } = data;
  return (
    <Container>
      <Background>
        <img src={backgroundImg} alt={data.tittle} />
      </Background>
      <ImgTittle>
        <img src={titleImg} alt={data.tittle} />
      </ImgTittle>
      <ControlMeta>
        <Controls>
          <Play>
            <img src="/images/play-icon-black.png" alt="playicon" />
            <span>Play</span>
          </Play>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="playicon" />
            <span>Trailer</span>
          </Trailer>
          <AddListButton>
            <span />
            <span />
          </AddListButton>
        </Controls>
        <SubTittle>{subTitle}</SubTittle>
        <Description>{description}</Description>
      </ControlMeta>
    </Container>
  );
};

export default DetailPage;
