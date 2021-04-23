import React from "react";
import styled from "styled-components";

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
    width: 100;
  }
`;
const Header = () => {
  return (
    <Nav>
      <LogoImage>
        <img src="/images/logo.svg" alt="Disney +" />
      </LogoImage>
      <button>Login</button>
    </Nav>
  );
};

export default Header;
