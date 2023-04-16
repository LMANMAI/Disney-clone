import React, { useEffect } from "react";
import { auth, provider, signInWithPopup } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import {
  HeaderNav,
  HeaderLogoImage,
  HeaderNavMenu,
  HeaderButtonLogin,
  HeaderImgUser,
  HeaderDropMenu,
  HeaderSignOutHover,
  WarningMessage,
} from "../../assets";
const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
    // eslint-disable-next-line
  }, [username]);

  const handleAuth = () => {
    console.log(provider);
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          console.log(result);
        })
        .catch((error) => console.log(error));
    } else if (username) {
      auth
        .signOut(auth)
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
    <HeaderNav>
      <WarningMessage>
        This is a study case project , is not the original page.
      </WarningMessage>
      <HeaderLogoImage>
        {/* <img src="/images/logo.svg" alt="Disney +" /> */}
      </HeaderLogoImage>
      <span>Disney+ CLONE</span>
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
          </HeaderNavMenu>
          <HeaderSignOutHover>
            <HeaderImgUser src={photo} alt={username} />
            <HeaderDropMenu>
              <span onClick={handleAuth}>Sign Out</span>
            </HeaderDropMenu>
          </HeaderSignOutHover>
        </>
      )}
    </HeaderNav>
  );
};

export default Header;
