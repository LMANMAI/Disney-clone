import styled from "styled-components";

export const CatContainer = styled.section`
  margin-top: 100px;
  padding: 10px 25px;
  margin: 0px auto;
  margin-top: 100px;
  padding: 10px 25px;
  width: calc(100vw - 60px);
  transition: 250ms ease-in-out;
  background-color: rgb(26, 29, 41);
  position: fixed;
  height: 100vh;
  top: 0px;
  transition: opacity 200ms ease 0s;
  width: 100%;
  z-index: -3;

  .container__topside{
     left: 0px;
    //opacity: 0;
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
    height: 30vw;
    justify-content: center;
    margin: 0px auto;
    min-height: 170px;
    opacity: 0;
    padding-bottom: 24px;
    transition: opacity 200ms ease 0s;
    width: 100%;
  } 
  .divider{
    background-image: linear-gradient(transparent 25%, transparent 50%, rgb(26, 29, 41) 75%, rgb(26, 29, 41) 100%);
    position: absolute;
    inset: 0px;
}
  }
`;
