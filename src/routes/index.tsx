import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  HomePage,
  DetailPage,
  Watchlist,
  Categories,
  Search,
} from "../pages";
import { Header } from "../pages/components";
import { selectUserName } from "../features/user/userSlice";
import { useSelector } from "react-redux";
const RoutesComponent = () => {
  const username = useSelector(selectUserName);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {username && (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/:id" element={<DetailPage />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/categ/:categ" element={<Categories />} />
            <Route path="/search" element={<Search />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
