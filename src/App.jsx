// import React from 'react'
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
