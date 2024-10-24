import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
/*import Footer from "./Components/Footer";*/
import Home from "./Components/Home";
import MovieDetail from "./Components/MovieDetail";
import Favourite from "./Components/Favourite";
import { FavuoriteThemeProvider } from "./ContextProvider";

const App = () => {
  return (
    <FavuoriteThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </FavuoriteThemeProvider>
  );
};

export default App;

/*

      <Footer />
*/