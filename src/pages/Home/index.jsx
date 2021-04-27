import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewer from "../components/Viewer";
import Section from "../components/Section";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import {
  selectRecommended,
  selectNewdisney,
  selectOriginals,
  selectTrending,
} from "../../features/movie/movieSlice";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
const HomePage = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let trend = [];
  let newdisney = [];
  let originals = [];
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshoot) => {
      snapshoot.docs.map((doc) => {
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
      });

      dispatch(
        setMovies({
          recommended: recommends,
          newdisney: newdisney,
          trending: trend,
          originals: originals,
        })
      );
    });
  }, [username]);
  const moviesRec = useSelector(selectRecommended);
  const moviesOrig = useSelector(selectOriginals);
  const moviesNew = useSelector(selectNewdisney);
  const moviesTrend = useSelector(selectTrending);
  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Section tittle="Recommended for you" arrayMovie={moviesRec} />
      <Section tittle="Trending" arrayMovie={moviesTrend} />
      <Section tittle="New on Disney+" arrayMovie={moviesNew} />
      <Section tittle="Originals" arrayMovie={moviesOrig} />
    </Container>
  );
};

export default HomePage;
