import React from "react";
import {
  LoginContainer,
  LoginContent,
  LoginBgImage,
  LoginBrandContent,
  LoginBrands,
  LoginButton,
  LoginDesc,
} from "../../assets";
const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginBrandContent>
          {/* <LoginBrands src="/images/cta-logo-one.svg " alt="brand images" /> */}
          <span>Diseney Clone</span>
          <LoginButton>GET ALL THERE</LoginButton>
          <LoginDesc>
            Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta,
            computadora, teléfono y otros. Vive una experiencia única con una
            amplia selección de títulos en 4K. Además, puedes ver en cuatro
            pantallas en simultáneo para que nadie se quede afuera.
          </LoginDesc>
          {/* <LoginBrands src="/images/cta-logo-two.png " alt="brand images" /> */}
        </LoginBrandContent>
        <LoginBgImage />
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginPage;
