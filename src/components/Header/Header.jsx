// import React from 'react'

// Components
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-row">
          <HeaderTop />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
