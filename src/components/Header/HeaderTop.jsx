// import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Images
import logo from "../../assets/icons/logo.webp";

// Icons
import { FaSearch } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { CgLogIn } from "react-icons/cg";
import { BsFilterLeft } from "react-icons/bs";

// Components
import LoginModal from "../Modal/LoginModal";
import MobileFilter from "../Filter/MobileFilter";

const HeaderTop = () => {
  // Modal
  const [open, setOpen] = useState(false);

  // Filter
  const [filterOpen, setFilterOpen] = useState(false);

  // toggle Modal
  const toggleModal = () => {
    setOpen(!open);
  };

  const openMobileFilter = () => {
    setFilterOpen(!filterOpen);
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
      <Link to="/" className="logo" onClick={() => setFilterOpen(false)}>
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
        <div className="btn filter-btn" onClick={openMobileFilter}>
          <BsFilterLeft className="icon" />
        </div>
        <Link
          to="/register"
          className="btn"
          onClick={() => setFilterOpen(false)}
        >
          <HiUserAdd className="icon" />
          <span>Üye Ol</span>
        </Link>
        <Link className="btn" onClick={toggleModal}>
          <CgLogIn className="icon" />
          <span>Üye Girişi</span>
        </Link>
      </div>

      {/* Mobile Filter */}
      <MobileFilter filterOpen={filterOpen} setFilterOpen={setFilterOpen} />

      {/* Modal */}
      <LoginModal isOpen={open} onClose={toggleModal} />
    </div>
  );
};

export default HeaderTop;
