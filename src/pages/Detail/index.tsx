import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../services/firebase";
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

interface MovieData {
  title: string;
  titleImg: string;
  subTitle: string;
  description: string;
  backgroundImg: string;
}

const DetailPage = () => {
  const [data, setData] = useState<MovieData | null>(null);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { titleImg, subTitle, description, backgroundImg } = data;

  return (
    <DetailContainer>
      <DetailBackground>
        <img src={backgroundImg} alt={data.title} />
      </DetailBackground>
      <DetailImgTittle>
        <img src={titleImg} alt={data.title} />
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
