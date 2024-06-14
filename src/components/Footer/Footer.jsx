// import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-in">
          <div className="content">
            <Link to="/">film izle</Link>
            <Link to="/">film izle</Link>
            <Link to={"item"}></Link>
            <div className="copyright">
              Copyright © 2024
              <Link to="/">HDFilmcehennemi | Film izle | HD Film izle</Link>
            </div>
            <div className="bottom">
              <span>Tüm Hakları Saklıdır</span> hdfilmcehennemi,
              hdfilmcehennemi2
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
