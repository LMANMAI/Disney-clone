import styled from "styled-components";

export const CatContainer = styled.main`
  display: block;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 24px);
  position: relative;

  .container__topside {
    left: 0px;
    position: fixed;
    right: 0px;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    z-index: -1;
  }
  .img__bg {
    transition: opacity 1500ms ease 0s;
    width: 100vw;
  }

  .brand {
    align-items: flex-end;
    display: flex;
    height: 35vw;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px auto;
    min-height: 170px;
    padding-bottom: 24px;
    transition: opacity 200ms ease 0s;
    width: 100%;
  }

  .divider {
    background-image: linear-gradient(
      transparent 25%,
      transparent 50%,
      rgb(26, 29, 41) 75%,
      rgb(26, 29, 41) 100%
    );
    position: absolute;
    inset: 0px;
  }
  .background {
    background-color: rgb(26, 29, 41);
    position: fixed;
    height: 100vh;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    z-index: -3;
    left: 0;
  }
  .container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    a {
      color: #f9f9f9;
      text-decoration: none;
      position: relative;
      box-sizing: border-box;
      height: 200px;
      overflow: hidden;
      .img__container {
        max-width: 300px;
        max-height: 200px;
        overflow: hidden;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .back {
    background-image: linear-gradient(
      transparent 25%,
      transparent 50%,
      rgb(26, 29, 41) 75%,
      rgb(26, 29, 41) 100%
    );
    position: absolute;
    inset: 0px;
    @media (min-width: 768px) {
      position: fixed;
    }
  }
`;

export const SearchResultsWraper = styled.div`
  width: 80vw;
  margin: 0px auto;
  min-height: 100vh;
  z-index: 5;
  position: relative;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    gap: 20px;
    padding: 0px;
  }
  padding: 1rem;
  @media (min-width: 768px) {
    ul {
      grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
    }
  }
`;
export const SearchResultsImgContainer = styled.div`
  flex: 1;
  height: 150px;
  overflow: hidden;
  transition: 250ms ease-in-out;
  img {
    width: 100%;
    vertical-align: top;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transform-origin: center;
    box-shadow: 11px -4px 86px -21px rgba(0, 0, 0, 0.93);
    & > .overlay {
      height: 50%;
      display: block;
    }
  }

  .overlay {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #161a1d);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
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
