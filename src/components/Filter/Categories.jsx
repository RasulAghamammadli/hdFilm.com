// import React from 'react'
import { Link } from "react-router-dom";

// data
import { categories } from "../../categoryData.js";

// Icons
import { FaBars } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="categories">
      <div className="title">
        <h5 className="head">
          <FaBars className="icon" />
          Film Türleri
        </h5>
      </div>
      <ul className="list">
        {categories.map((item) => (
          <li key={item} className="list-item">
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
