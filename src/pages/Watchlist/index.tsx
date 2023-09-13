import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { selectUserEmail } from "../../features/user/userSlice";
import { WatchlistContainer } from "./styles";
import { Link } from "react-router-dom";
import db from "../../services/firebase";

const Watchlist = () => {
  const user_email = useSelector(selectUserEmail);
  const [movieList, setMovieList] = useState<any[]>([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const obtenerElementos = async () => {
    try {
      const listaDeseosRef = collection(db, user_email);
      const querySnapshot = await getDocs(listaDeseosRef);
      const movieIds: number[] = [];

      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          movieIds.push(doc.data().movieid);
        }
      });

      const moviePromises = movieIds.map(async (movieId) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_APITMB_KEY}`
        );
        const movieData = await response.json();
        return movieData;
      });

      const movies = await Promise.all(moviePromises);

      const uniqueMovies: any[] = [];
      movies.forEach((movie) => {
        if (!uniqueMovies.some((m) => m.id === movie.id)) {
          uniqueMovies.push(movie);
        }
      });

      setMovieList(uniqueMovies);
    } catch (error) {}
  };

  useEffect(() => {
    obtenerElementos();
    return () => {};
  }, []);
  return (
    <WatchlistContainer>
      {movieList.map((item) => (
        <Link to={`/${item.id}`} className="watchlist__item">
          <img
            src={`${baseUrl}${item.backdrop_path || item.poster_path}`}
            alt={item.original_title}
          />
          <div className="overlay">
            <div className="text">{item.title || item.name}</div>
          </div>
        </Link>
      ))}
    </WatchlistContainer>
  );
};

export default Watchlist;
