import React, { useEffect } from "react";
import { ImgSlider, Viewer, Section, Footer } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import {
  selectRecommended,
  selectNewdisney,
  selectOriginals,
  selectTrending,
} from "../../features/movie/movieSlice";
import { HomeContainer } from "../../assets";

type MovieData = {
  backgroundImg: string;
  cardImg: string;
  overview: string;
  description: string;
  title: string;
  id: number;
  backdrop_path?: string;
};

const HomePage = () => {
  const dispatch = useDispatch();

  const fetchMovies = async (url: string, options: RequestInit) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchMovieData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTU3ZGU4NTk5MWQ2MWE1ZWU0MmNhMmMzZGZkODU1OCIsInN1YiI6IjYwN2E2YTFiZmJlMzZmMDA3OGUyNTI3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJqfWFXRWjguDKDKNmEVGeHXqwar-TrHebsMpuZNxyA",
      },
    };
    const [
      recommendedResponse,
      trendingResponse,
      originalsResponse,
      newDisneyResponse,
    ] = await Promise.all([
      fetchMovies(
        "https://api.themoviedb.org/3/discover/movie?certification_country=AR&include_adult=false&include_video=false&language=en-US&release_date.lte=2023-11-07&sort_by=popularity.desc&vote_average.gte=0&vote_average.lte=10&vote_count.gte=0&watch_region=AR&with_watch_providers=337",
        options
      ),
      fetchMovies(
        "https://api.themoviedb.org/3/discover/movie?certification_country=AR&include_adult=false&include_video=false&language=en-US&page=1&release_date.lte=2023-11-13&sort_by=primary_release_date.desc&vote_average.lte=10&with_genres=16&with_runtime.lte=400&with_watch_providers=337",
        options
      ),
      fetchMovies(
        "https://api.themoviedb.org/3/discover/movie?certification_country=AR&include_adult=false&include_video=false&language=en-US&page=1&release_date.lte=2023-11-13&sort_by=popularity.desc&vote_average.lte=10&with_genres=16&with_runtime.lte=400&with_watch_providers=337",
        options
      ),
      fetchMovies(
        "https://api.themoviedb.org/3/discover/movie?certification_country=AR&include_adult=false&include_video=false&language=en-US&page=1&release_date.lte=2023-11-13&sort_by=primary_release_date.as&vote_average.lte=10&with_genres=16&with_runtime.lte=400&with_watch_providers=337",
        options
      ),
    ]);

    const recommends = recommendedResponse
      .filter((item: MovieData | null) => item?.backdrop_path !== null)
      .map((item: MovieData | null) => ({
        backgroundImg: item?.backdrop_path,
        cardImg: item?.backdrop_path,
        description: item?.overview,
        titleImg: item?.title,
        id: item?.id,
      }));

    const trend = trendingResponse
      .filter((item: MovieData | null) => item?.backdrop_path !== null)
      .map((item: MovieData | null) => ({
        backgroundImg: item?.backdrop_path,
        cardImg: item?.backdrop_path,
        description: item?.overview,
        titleImg: item?.title,
        id: item?.id,
      }));

    const originals = originalsResponse
      .filter((item: MovieData | null) => item?.backdrop_path !== null)
      .map((item: MovieData | null) => ({
        backgroundImg: item?.backdrop_path,
        cardImg: item?.backdrop_path,
        description: item?.overview,
        titleImg: item?.title,
        id: item?.id,
      }));

    const newdisney = newDisneyResponse
      .filter((item: MovieData | null) => item?.backdrop_path !== null)
      .map((item: MovieData | null) => ({
        backgroundImg: item?.backdrop_path,
        cardImg: item?.backdrop_path,
        description: item?.overview,
        titleImg: item?.title,
        id: item?.id,
      }));
    dispatch(
      setMovies({
        recommended: recommends,
        newdisney: newdisney,
        trending: trend,
        originals: originals,
      })
    );
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const moviesRec = useSelector(selectRecommended);
  const moviesOrig = useSelector(selectOriginals);
  const moviesNew = useSelector(selectNewdisney);
  const moviesTrend = useSelector(selectTrending);
  return (
    <div>
      <HomeContainer>
        <div style={{ padding: "15px" }}>
          <div className="carousel-container">
            <ImgSlider movies={moviesTrend || []} />
          </div>

          <Viewer />

          <Section tittle="Recommended for you" arrayMovie={moviesRec} />
          <Section tittle="Trending" arrayMovie={moviesTrend} />
          <Section tittle="New on Disney+" arrayMovie={moviesNew} />
          <Section tittle="Originals" arrayMovie={moviesOrig} />
        </div>
      </HomeContainer>
      <Footer />
    </div>
  );
};

export default HomePage;
