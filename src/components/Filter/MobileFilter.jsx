// import React from 'react'
import PropTypes from "prop-types";

// Components
import Categories from "./Categories";
import Years from "./Years";

const MobileFilter = ({ filterOpen, setFilterOpen }) => {
  return (
    <div className={`mobile-filter ${filterOpen ? "open-mobile-filter" : ""}`}>
      <div className="filter-content">
        <Categories setFilterOpen={setFilterOpen} />
        <Years setFilterOpen={setFilterOpen} />
      </div>
    </div>
  );
};

MobileFilter.propTypes = {
  filterOpen: PropTypes.bool.isRequired,
  setFilterOpen: PropTypes.func.isRequired,
};

export default MobileFilter;
