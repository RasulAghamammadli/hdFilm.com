// import React from 'react'
import { Link } from "react-router-dom";

// Icons
import { FaCalendarAlt } from "react-icons/fa";

const Years = () => {
  // Years Arr
  const years = [];
  for (let year = 1969; year <= 2024; year++) {
    years.push(year);
  }

  return (
    <div className="years">
      <div className="title">
        <h5 className="head">
          <FaCalendarAlt className="icon" />
          Yıllara Göre Filmler
        </h5>
      </div>
      <ul className="list">
        {years.reverse().map((item) => (
          <li key={item} className="list-item">
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Years;
