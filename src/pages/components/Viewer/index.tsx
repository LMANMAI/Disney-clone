import React from "react";
import { Link } from "react-router-dom";
import { ViewerContainer, ViewerWrapper } from "../../../assets";
import { viewerData } from "./data";
const Viewer = () => {
  return (
    <ViewerContainer>
      {viewerData.map((item, index) => (
        <ViewerWrapper key={index}>
          <Link to={`/categ/${item.category}`}>
            <img src={item.imageSrc} alt={item.category} />
            <video autoPlay={true} loop={true} playsInline={true}>
              <source src={item.videoSrc} type="video/mp4" />
            </video>
          </Link>
        </ViewerWrapper>
      ))}
    </ViewerContainer>
  );
};

export default Viewer;
