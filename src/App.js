import React from "react";
import "./Styles.css";
import Header from "./components/Header";
import FetchedMovies from "./components/FetchedMovies";
import { Helmet } from "react-helmet";
import Popular from "./components/Popular";

function App() {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: #1b1c22; }"}</style>
      </Helmet>
      <Header />
      <Popular />
      <FetchedMovies />
    </>
  );
}

export default App;
