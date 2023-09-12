import React from "react";
import { FooterContainer } from "./styles";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        <button>Política de privacidad</button>
        <button>Acuerdo de suscripción</button>
        <button>Cancelar suscripción</button>
        <button>Ayuda</button>
        <button>Dispositivos compatibles</button>
        <button>Acerca de Disney+</button>
        <button>Publicidad personalizada</button>
        <div className="footer__copy">
          Disney+ es un servicio por suscripción de pago, su contenido está
          sujeto a disponibilidad. El servicio Disney+ es comercializado por The
          Walt Disney Company (Argentina) S.A., Tucumán 1, Piso 4º (C1049AAA)
          Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT
          30-63984459-1.
        </div>
        <div className="footer__derechos">
          © Disney. Todos los derechos reservados.
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
