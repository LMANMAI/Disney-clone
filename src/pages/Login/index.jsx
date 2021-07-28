import React from "react";
import styled from "styled-components";

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -3;
`;
const BrandContent = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;
const Brands = styled.img`
  width: 100%;
  max-width: 650px;
  display: block;
  margin-bottom: 12px;
  min-height: 1px;
`;
const Button = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;
const Desc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  margin: 24px 0;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <BrandContent>
          <Brands src="/images/cta-logo-one.svg " alt="brand images" />
          <Button>GET ALL THERE</Button>
          <Desc>
            Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta,
            computadora, teléfono y otros. Vive una experiencia única con una
            amplia selección de títulos en 4K. Además, puedes ver en cuatro
            pantallas en simultáneo para que nadie se quede afuera.
          </Desc>
          <Brands src="/images/cta-logo-two.png " alt="brand images" />
        </BrandContent>
        <BgImage />
      </Content>
    </Container>
  );
};

export default LoginPage;
