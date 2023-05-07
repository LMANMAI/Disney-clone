import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 100px;
  .footer {
    display: flex;
    margin: 30px auto;
    -webkit-box-pack: center;
    justify-content: center;
    flex-flow: row wrap;
    max-width: 500px;
    button {
      border: none;
      margin: 11px 5px 10px;
      font-size: 12px;
      letter-spacing: -0.1px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      text-decoration: none;
      color: #f9f9f9;
    }
    .footer__copy {
      font-size: 12px;
      letter-spacing: -0.1px;
      line-height: 1.5;
      color: #cacaca;
      text-align: center;
      margin: 0 1.75rem;
    }
    .footer__derechos {
      font-size: 12px;
      letter-spacing: -0.1px;
      line-height: 1.5;
    }
  }
`;
