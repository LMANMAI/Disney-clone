import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  letter-spacing: 15px;
  z-index: 3;
`;
const LogoImage = styled.a`
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

const NavMenu = styled.div`
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
    display: none;
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
const ButtonLogin = styled.a`
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
const Header = () => {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Nav>
      <LogoImage>
        <img src="/images/logo.svg" alt="Disney +" />
      </LogoImage>
      <NavMenu>
        <a>
          <img src="images/home-icon.svg" alt="Home" />
          <span>home</span>
        </a>
        <a>
          <img src="images/search-icon.svg" alt="Home" />
          <span>search</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" alt="Home" />
          <span>watchlist</span>
        </a>
        <a>
          <img src="images/original-icon.svg" alt="Home" />
          <span>originals</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" alt="Home" />
          <span>movies</span>
        </a>
        <a>
          <img src="images/series-icon.svg" alt="Home" />
          <span>series</span>
        </a>
      </NavMenu>
      <ButtonLogin onClick={handleAuth}>LOGIN</ButtonLogin>
    </Nav>
  );
};

export default Header;
