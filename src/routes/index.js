import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, DetailPage } from "../pages";
import Header from "../pages/components/Header";
import { selectUserName } from "../features/user/userSlice";
import { useSelector } from "react-redux";
const RoutesComponent = () => {
  const username = useSelector(selectUserName);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        {username && (
          <>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/detail/:id" element={<DetailPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
