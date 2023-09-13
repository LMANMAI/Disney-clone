import styled from "styled-components";
import Slider from "react-slick";
interface IDetailAddListButton {
  rotate?: boolean;
}
interface IDetailControlMeta {
  display?: boolean;
}

/**Login */
export const WarningMessage = styled.div`
  background-color: white;
  width: 100%;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  letter-spacing: 0;
  text-align: center;
  padding: 3px;
`;
export const LoginContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
export const LoginContent = styled.div`
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
export const LoginBgImage = styled.div`
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
export const LoginBrandContent = styled.div`
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
export const LoginBrands = styled.img`
  width: 100%;
  max-width: 650px;
  display: block;
  margin-bottom: 12px;
  min-height: 1px;
`;
export const LoginButton = styled.a`
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
export const LoginDesc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  margin: 24px 0;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

/**Home */
export const HomeContainer = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0px calc(3.5vw - 5px);
  padding-top: 72px;
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
/**DEtail */

export const DetailContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  .back__btn {
    z-index: 11;
  }
`;
export const DetailBackground = styled.div`
  left: 0;
  opacity: 0.725;
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
export const DetailImgTittle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 200px auto;
  margin-bottom: 0px;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 90vw;
    box-shadow: 10px 10px 32px -1px rgba(0, 0, 0, 0.75);
  }

  @media (min-width: 768px) {
    margin: 90px auto;
    margin-bottom: 0px;
    .img {
      width: 35vw;
    }
  }

  @media (min-width: 768px) {
    margin: 0px auto;
    margin-bottom: 0px;
  }
`;
export const DetailControlMeta = styled.div<IDetailControlMeta>`
  max-width: 874px;

  .msg__detail {
    margin: 0px;
    padding: 10px 15px;
    border: 1px solid;
    background-color: rgb(0 0 0 /50%);
    border-radius: 5px;
    width: fit-content;
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;
export const DetailControls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
`;
export const DetailPlay = styled.button`
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
export const DetailTrailer = styled(DetailPlay)`
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: 1px solid rgb(249, 249, 249);
`;
export const DetailAddListButton = styled.div<IDetailAddListButton>`
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
  transition: all 250ms ease;
  transform: ${(props) => (props.rotate ? " rotate(45deg)" : "inherit")};
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(8px, 0px) rotate(0deg);
      width: 20px;
    }
    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-13px);
    }
  }
`;
export const DetailSubTittle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const DetailDescription = styled.div`
  font-size: 20px;
  line-height: 1.4;
  padding: 16px 0px;
  color: rgba(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

/**Components */
/* Viewer */

export const ViewerContainer = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const ViewerWrapper = styled.div`
  padding-top: 56.25%;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    object-fit: cover;
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
    opacity: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
    video {
      opacity: 1;
    }
  }
`;
/* Section */

export const RowWraper = styled.div`
  .contenedor_titulo_controles {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3 {
      font-size: 1.525rem;
      color: #fff;
      margin: 0px;
    }
  }
`;

export const ContenedorPrincipal = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .flecha_izquierda {
    left: 0;
  }
  .flecha_derecha {
    right: 0;
  }
  scroll-behavior: smooth;
`;
export const ContenedorCarrousel = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const Carrousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  scroll-behavior: smooth;
  padding: 10px;
`;
export const Pelicula = styled.div`
  width: 100%;
  min-width: 200px;
  position: relative;
  border-radius: 5px;
  transition: smooth;
  a {
    display: block;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 5px;
    transition: all 0.2s ease 0s;
    box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px;
    border-radius: 5px;
    object-fit: cover;
    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -14px,
        rgb(0 0 0 /72%) 0px 30px 22px -10px;
      transform: scale(1.04);
      border-color: rgba(249, 249, 249, 0.8);
      transform-origin: center;
      z-index: 2;
      .overlay {
        height: 30%;
      }
    }
  }
  @media (min-width: 768px) {
    min-width: 20%;
  }
  @media (min-width: 1024px) {
    min-width: 19%;
  }
  .text {
    white-space: nowrap;
    color: white;
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;
export const ButtonCarrousel = styled.button`
  position: absolute;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 2.125rem;
  height: calc(100% - 20px);
  top: calc(50%, 25%);
  line-height: 2.125rem;
  width: 50px;
  color: white;
  cursor: pointer;
  z-index: 5;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
/**Header */
export const HeaderNav = styled.nav`
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  height: 70px;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  letter-spacing: 15px;
  z-index: 10;
  transition: background 250ms ease;
`;
export const HeaderLogoImage = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
export const HeaderNavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 1.5rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    opacity: 0;
    pointer-events: none;
    width: 50%;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    //align-items: center;
    img {
      height: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;
export const HeaderButtonLogin = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
    cursor: pointer;
    border-color: transparent;
  }
`;
export const HeaderDropMenu = styled.div`
  position: absolute;
  top: -2px;
  right: -30px;
  height: 330px;
  background-color: rgb(19, 19, 19);
  letter-spacing: 3px;
  font-size: 13px;
  width: 260px;
  padding: 10px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  transition: all 250ms ease-in-out;
  opacity: 0;
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  pointer-events: none;
  list-style: none;
  li {
    margin: 7px;
    padding: 8px 0px;

    font-size: 15px;
  }
`;
export const HeaderImgUser = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  margin-top: 3px;
  z-index: 99;
  &:hover {
    ${HeaderDropMenu} {
      opacity: 1;
    }
  }
`;

export const HeaderSignOutHover = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;
  &:hover {
    ${HeaderDropMenu} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
/**img slider */
export const IMGSliderCarrousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 250ms ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 12px;
      color: rgb(150, 150, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;
export const IMGSliderWrapImg = styled.div`
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 5px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
