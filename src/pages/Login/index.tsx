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
const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginBrandContent>
          {/* <LoginBrands src="/images/cta-logo-one.svg " alt="brand images" /> */}
          <span>Diseney Clone</span>
          <LoginButton
            onClick={() =>
              alert(
                "This is a case study for my portfolio, it is a copy of the disney+ spa, it is not the original page, in fact it does not have any payment gateway, to verify that you can review one of my other projects. Thank you."
              )
            }
          >
            GET ALL THERE
          </LoginButton>
          <LoginDesc>
            Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta,
            computadora, teléfono y otros. Vive una experiencia única con una
            amplia selección de títulos en 4K. Además, puedes ver en cuatro
            pantallas en simultáneo para que nadie se quede afuera.
          </LoginDesc>
        </LoginBrandContent>
        <LoginBgImage />
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginPage;
