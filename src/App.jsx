// import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/Home/Home";
import MobilApp from "./pages/MobilApp/MobilApp";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Path location
  const location = useLocation();

  // Footer state
  const [showFooter, setShowFooter] = useState(true);

  // Excluded page path
  const excludedFoot = ["/"];

  useEffect(() => {
    setShowFooter(!excludedFoot.includes(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mobil-app" element={<MobilApp />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </>
  );
};

export default App;
