import React from "react";
import "./Styles.css";
import Header from "./components/Header";
import FetchedMovies from "./components/FetchedMovies";
import { Helmet } from "react-helmet";
import AlertBox from "./components/AlertBox";

function App() {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: #1b1c22; }"}</style>
      </Helmet>
      <Header />
      <AlertBox />
      <FetchedMovies />
    </>
  );
}

export default App;
