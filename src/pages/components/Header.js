import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";
import { Link } from "react-router-dom";
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
const ImgUser = styled.img``;
const DropMenu = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background-color: rgb(19, 19, 19);
  letter-spacing: 3px;
  font-size: 13px;
  width: 100px;
  padding: 10px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  transition: all 250ms ease-in-out;
  opacity: 0;
`;
const SignOutHover = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${ImgUser} {
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropMenu} {
      opacity: 1;
    }
  }
`;
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [username]);
  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => alert(error.message));
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <LogoImage>
        <img src="/images/logo.svg" alt="Disney +" />
      </LogoImage>
      {!username ? (
        <ButtonLogin onClick={handleAuth}>LOGIN</ButtonLogin>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="images/home-icon.svg" alt="Home" />
              <span>home</span>
            </Link>
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
          <SignOutHover>
            <ImgUser src={photo} alt={username} />
            <DropMenu>
              <span onClick={handleAuth}>Sign Out</span>
            </DropMenu>
          </SignOutHover>
        </>
      )}
    </Nav>
  );
};

export default Header;
