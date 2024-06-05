// import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Images
import logo from "../../assets/icons/logo.webp";

// Icons
import { FaSearch } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { CgLogIn } from "react-icons/cg";

// Components
import LoginModal from "../Modal/LoginModal";

const HeaderTop = () => {
  // Modal
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  // preventScroll
  const handleScroll = (e) => {
    if (open) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="header-top" onScroll={handleScroll}>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="search">
        <div className="icon-box">
          <FaSearch className="icon" />
        </div>
        <input
          type="search"
          className="search-input"
          placeholder="film arayın..."
        />
      </div>
      <div className="for-user">
        <Link to="/register" className="btn">
          <HiUserAdd className="icon" />
          <span>Üye Ol</span>
        </Link>
        <Link className="btn" onClick={toggleModal}>
          <CgLogIn className="icon" />
          <span>Üye Girişi</span>
        </Link>
      </div>

      {/* Modal */}
      <LoginModal isOpen={open} onClose={toggleModal} />
    </div>
  );
};

export default HeaderTop;
