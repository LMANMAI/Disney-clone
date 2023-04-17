import React, { useEffect } from "react";
import ImgSlider from "../components/ImgSlider";
import Viewer from "../components/Viewer";
import Section from "../components/Section";
import { useDispatch, useSelector } from "react-redux";
import db, { storage, doc, set, setDoc } from "../../firebase";

import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, listAll } from "firebase/storage";

import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import {
  selectRecommended,
  selectNewdisney,
  selectOriginals,
  selectTrending,
} from "../../features/movie/movieSlice";
import { HomeContainer } from "../../assets";

const HomePage = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let trend = [];
  let newdisney = [];
  let originals = [];
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newdisney = [...newdisney, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trend = [...trend, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }

        dispatch(
          setMovies({
            recommended: recommends,
            newdisney: newdisney,
            trending: trend,
            originals: originals,
          })
        );
      });
    })();

    // eslint-disable-next-line
  }, [username]);
  const moviesRec = useSelector(selectRecommended);
  const moviesOrig = useSelector(selectOriginals);
  const moviesNew = useSelector(selectNewdisney);
  const moviesTrend = useSelector(selectTrending);

  return (
    <HomeContainer>
      <ImgSlider />
      <Viewer />
      <Section tittle="Recommended for you" arrayMovie={moviesRec} />
      <Section tittle="Trending" arrayMovie={moviesTrend} />
      <Section tittle="New on Disney+" arrayMovie={moviesNew} />
      <Section tittle="Originals" arrayMovie={moviesOrig} />
    </HomeContainer>
  );
};

export default HomePage;
