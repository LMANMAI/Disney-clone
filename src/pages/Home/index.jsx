import React, { useEffect } from "react";
import { ImgSlider, Viewer, Section, Footer } from "pages/components";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
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
        console.log(doc.data());
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

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTU3ZGU4NTk5MWQ2MWE1ZWU0MmNhMmMzZGZkODU1OCIsInN1YiI6IjYwN2E2YTFiZmJlMzZmMDA3OGUyNTI3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJqfWFXRWjguDKDKNmEVGeHXqwar-TrHebsMpuZNxyA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?certification_country=AR&include_adult=false&include_video=false&language=en-US&release_date.lte=2023-11-07&sort_by=popularity.desc&vote_average.gte=0&vote_average.lte=10&vote_count.gte=0&watch_region=AR&with_watch_providers=337",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // recommends = [
        //   ...recommends,
        //   response.results.map((item) => ({
        //     backgroundImg:
        //       "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",
        //     cardImg:
        //       "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg",
        //     subTitle:
        //       "2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical",
        //     description:
        //       "When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.",
        //     titleImg:
        //       "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",
        //     title: item.name,
        //     type: "trending",
        //   })),
        // ];
        response.results.map((item) => {
          console.log(item);
          recommends = [
            ...recommends,
            {
              backgroundImg: item.backdrop_path,
              cardImg:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg",
              subTitle:
                "2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical",
              description:
                "When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.",
              titleImg:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",
              title: item.name,
              type: "trending",
            },
          ];
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <HomeContainer>
        <ImgSlider />
        <Viewer />
        <Section tittle="Recommended for you" arrayMovie={moviesRec} />
        <Section tittle="Trending" arrayMovie={moviesTrend} />
        <Section tittle="New on Disney+" arrayMovie={moviesNew} />
        <Section tittle="Originals" arrayMovie={moviesOrig} />
      </HomeContainer>
      <Footer />
    </div>
  );
};

export default HomePage;
