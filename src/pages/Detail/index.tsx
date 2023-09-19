import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import db from "../../services/firebase";
import { useSelector } from "react-redux";
import {
  DetailContainer,
  DetailBackground,
  DetailImgTittle,
  DetailControlMeta,
  DetailControls,
  DetailPlay,
  DetailTrailer,
  DetailAddListButton,
  DetailSubTittle,
  DetailDescription,
} from "../../assets";
import { selectUserEmail } from "../../features/user/userSlice";

interface MovieData {
  title: string;
  titleImg: string;
  subTitle: string;
  description: string;
  backgroundImg: string;
  backdrop_path: string;
}

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<MovieData | null>(null);
  const [exist, setExistItem] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const user_email = useSelector(selectUserEmail);

  const verificarExistenciaPelicula = async () => {
    if (data) {
      try {
        const movieDocRef = doc(db, user_email, data.title);
        const movieDocSnapshot = await getDoc(movieDocRef);
        if (movieDocSnapshot.exists()) {
          setExistItem(true);
          setDisplay(false);
        } else {
          setExistItem(false);
        }
      } catch (error) {}
    }
  };
  const agregarItem = async (nuevoItemData: any, cdname: string) => {
    verificarExistenciaPelicula();
    if (data) {
      try {
        await setDoc(doc(db, cdname, data.title), nuevoItemData);
        setDisplay(true);
        setMsg("¡Agregado!");
      } catch (error) {
        setMsg(`Error al guardar en Firestore: ${error}`);
      }
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }
  };

  const eliminarPelicula = async () => {
    if (data) {
      try {
        const movieDocRef = doc(db, user_email, data.title);
        await deleteDoc(movieDocRef);
        setDisplay(true);
        setExistItem(false);
        setMsg("La película ha sido eliminada de la lista.");
      } catch (error) {
        setMsg(`Error al eliminar la película: ${error}`);
      }
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const getDataFromId = async () => {
      const request = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APITMB_KEY}`
      );
      const response = await request.json();

      if (response) {
        setData({
          title: response.original_title,
          titleImg: response.original_title,
          subTitle: response.tagline || "",
          description: response.overview,
          backgroundImg: response.poster_path,
          backdrop_path: response.backdrop_path,
        });
      }
    };

    getDataFromId();
  }, []);

  useEffect(() => {
    verificarExistenciaPelicula();
  }, [data]);
  return (
    <DetailContainer>
      <DetailBackground>
        <img
          loading="lazy"
          src={`${baseUrl}${data?.backgroundImg}`}
          alt={data?.title}
        />
      </DetailBackground>

      <DetailImgTittle>
        <img
          loading="lazy"
          src={`${baseUrl}${data?.backdrop_path}`}
          alt={data?.title}
        />
      </DetailImgTittle>

      <DetailControlMeta display={display}>
        <DetailControls>
          <DetailPlay
            className="back__btn"
            title="Volver."
            onClick={() => navigate(-1)}
          >
            <span>
              <IoIosArrowBack />
            </span>
          </DetailPlay>
          <DetailPlay title="Reproducir titulo.">
            <img src="/images/play-icon-black.png" alt="playicon" />
            <span>Play</span>
          </DetailPlay>
          <DetailTrailer title="Reproducir trailer.">
            <img src="/images/play-icon-white.png" alt="playicon" />
            <span>Trailer</span>
          </DetailTrailer>
          <DetailAddListButton
            rotate={exist}
            title={exist ? "Eliminar de mi lista." : "Agregar a mi lista."}
            onClick={() => {
              if (exist) {
                eliminarPelicula();
              } else {
                agregarItem({ movieid: id }, user_email);
              }
            }}
          >
            <span />
            <span />
          </DetailAddListButton>
        </DetailControls>
        <DetailSubTittle>{data?.subTitle}</DetailSubTittle>
        <DetailDescription>{data?.description}</DetailDescription>

        <span className="msg__detail">{msg}</span>
      </DetailControlMeta>
      <div className="background"></div>
    </DetailContainer>
  );
};

export default DetailPage;
