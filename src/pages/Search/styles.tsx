import styled from "styled-components";
export const Wrapper = styled.div`
  .app_bg {
    background-color: rgb(26, 29, 41);
    position: fixed;
    height: 100vh;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    z-index: -3;
    &::after {
      background: url(images/home-background.png) 50% / cover no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      transition: opacity 500ms ease 0s;
    }
  }
`;
export const Section = styled.section`
  display: block;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 24px);
  position: relative;
  top: 90px;

  #search_input {
    position: fixed;
    left: 0px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    outline: none;
    text-overflow: ellipsis;
    z-index: calc(9);
    border: none;
    background: rgb(75, 78, 90);
    color: rgb(168, 169, 173);
    height: 100px;
    padding-left: calc(3.5vw + 24px);
    width: 100vw;

    font-family: Avenir-World-for-Disney-Demi, sans-serif;
    font-size: 44px;
    letter-spacing: 0.11px;
    line-height: 1.2;
  }
  .button__reset {
    background: transparent;
    border: none;
    cursor: pointer;
    position: fixed;
    padding: 0px;
    z-index: calc(9);
    opacity: 1;
    transition: all 0.2s ease-out 0s;
    height: 100px;
    right: 20px;
    top: auto;
    svg {
      height: 40px;
      min-width: 25px;
      width: 25px;
      z-index: auto;
      fill: rgb(249, 249, 249);
      transform: none;
    }
  }
`;
