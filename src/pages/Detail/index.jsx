import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import {
  DetailContainer,
  DetailBackground,
  DetailImgTittle,
  DetailControlMeta,
  DetailControls,
  DetailPlay,
  DetailTrailer,
  DetailAddListButton,
  DetailSubTittle,
  DetailDescription,
} from "../../assets";
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
    <DetailContainer>
      <DetailBackground>
        <img src={backgroundImg} alt={data.tittle} />
      </DetailBackground>
      <DetailImgTittle>
        <img src={titleImg} alt={data.tittle} />
      </DetailImgTittle>
      <DetailControlMeta>
        <DetailControls>
          <DetailPlay>
            <img src="/images/play-icon-black.png" alt="playicon" />
            <span>Play</span>
          </DetailPlay>
          <DetailTrailer>
            <img src="/images/play-icon-white.png" alt="playicon" />
            <span>Trailer</span>
          </DetailTrailer>
          <DetailAddListButton>
            <span />
            <span />
          </DetailAddListButton>
        </DetailControls>
        <DetailSubTittle>{subTitle}</DetailSubTittle>
        <DetailDescription>{description}</DetailDescription>
      </DetailControlMeta>
    </DetailContainer>
  );
};

export default DetailPage;
