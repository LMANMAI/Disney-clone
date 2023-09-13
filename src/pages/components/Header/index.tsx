import React, { useEffect } from "react";
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
    <HeaderNav>
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
              <span>home</span>
            </Link>
            <a>
              <img src="images/search-icon.svg" alt="Home" />
              <span>search</span>
            </a>
            <Link to="/watchlist">
              <img src="images/watchlist-icon.svg" alt="Home" />
              <span>watchlist</span>
            </Link>
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
