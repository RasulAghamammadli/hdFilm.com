// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FaSearch } from "react-icons/fa";

const HeaderNav = () => {
  // burger state
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Burger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="blur-nav"></div>
        <ul className="list">
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/" className="list-item">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="/salam" className="list-item">
              Türkçe Dublaj Filmler
            </Link>
          </li>
          <li>
            <Link to="/" className="list-item">
              Türkçe Altyazılı Filmler
            </Link>
          </li>
          <li>
            <Link to="/mobil-app" className="list-item">
              Mobil Uygulama
            </Link>
          </li>
          <li>
            <Link to="/" className="list-item">
              En Çok İzlenen Filmler
            </Link>
          </li>
          <li>
            <Link to="/" className="list-item">
              En Çok Beğenilen Filmler
            </Link>
          </li>
          <li>
            <Link to="/contact" className="list-item">
              İletişim
            </Link>
          </li>
          <li>
            <Link to="/" className="list-item">
              IMDb En İyiler
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bars">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      <nav className={`mobile-nav ${menuOpen ? "open-mobile-nav" : ""}`}>
        <div className="blur-nav"></div>
        <ul className="list">
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/salam" className="list-item">
              Türkçe Dublaj Filmler
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/" className="list-item">
              Türkçe Altyazılı Filmler
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/mobil-app" className="list-item">
              Mobil Uygulama
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/" className="list-item">
              En Çok İzlenen Filmler
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/" className="list-item">
              En Çok Beğenilen Filmler
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="//contact" className="list-item">
              İletişim
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/" className="list-item">
              IMDb En İyiler
            </Link>
          </li>
        </ul>
        <div className="search">
          <input
            type="search"
            className="search-input"
            placeholder="film arayın..."
          />
          <div className="icon-box">
            <FaSearch className="icon" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
