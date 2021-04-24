import React from "react";
import styled from "styled-components";

const BG = styled.div`
  background: url("/images/home-background.png");
  width: 100vw;
  height: 100vh;
`;
const HomePage = () => {
  return (
    <div>
      <BG></BG>
      HomePage
    </div>
  );
};

export default HomePage;
