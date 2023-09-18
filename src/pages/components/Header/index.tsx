import React, { useEffect, useState } from "react";
import { auth, provider, signInWithPopup } from "../../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../../features/user/userSlice";
import { Link } from "react-router-dom";
import {
  HeaderNav,
  HeaderNavMenu,
  HeaderButtonLogin,
  HeaderImgUser,
  HeaderDropMenu,
  HeaderSignOutHover,
  WarningMessage,
} from "../../../assets";

type UserType = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
    // eslint-disable-next-line
  }, [username]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const navContainer = document.querySelector(
        ".nav__container"
      ) as HTMLElement;
      const topContainerBrand = document.querySelector(
        ".container__topside"
      ) as HTMLElement;
      if (navContainer) {
        if (currentPosition >= 50) {
          navContainer.style.background =
            currentPosition >= 50 ? "#090b13" : "transparent";
          navContainer.classList.add("scroll-active");
        } else {
          navContainer.style.background =
            currentPosition < 50 ? "transparent" : "#090b13";
          navContainer.classList.remove("scroll-active");
        }
      }
      if (topContainerBrand) {
        if (currentPosition >= 60) {
          topContainerBrand.style.opacity = "0.2";
        } else {
          topContainerBrand.style.opacity = "1";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {});
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user: UserType) => {
    const displayName = user.displayName || "Usuario Anónimo";
    const email = user.email || "";
    dispatch(
      setUserLoginDetails({
        name: displayName,
        email: email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <HeaderNav className="nav__container">
      <WarningMessage>
        This is a study case project , is not the original page.
      </WarningMessage>
      {!username ? (
        <HeaderButtonLogin onClick={handleAuth}>LOGIN</HeaderButtonLogin>
      ) : (
        <>
          <HeaderNavMenu>
            <Link to="/home">
              <img src="images/home-icon.svg" alt="Home" />
              <span className="menu_span">home</span>
            </Link>
            <Link to="/search">
              <img src="images/search-icon.svg" alt="Home" />
              <span className="menu_span">search</span>
            </Link>
            <Link to="/watchlist">
              <img src="images/watchlist-icon.svg" alt="Home" />
              <span className="menu_span">watchlist</span>
            </Link>
          </HeaderNavMenu>
          <HeaderSignOutHover>
            <HeaderImgUser src={photo || ""} alt={username || ""} />
            <HeaderDropMenu>
              <li>Editar Perfiles</li>
              <li>Ajustes de la aplicacion</li>
              <li>Cuenta</li>
              <li>Ayuda</li>
              <li onClick={() => handleAuth()}>Cerrar Sesion</li>
            </HeaderDropMenu>
          </HeaderSignOutHover>
        </>
      )}
    </HeaderNav>
  );
};

export default Header;
