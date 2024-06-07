// import React from 'react'

// Category Data
import { categories } from "../../categoryData.js";

// Icons
import { FaRobot, FaFilter } from "react-icons/fa";

const MovieRobot = () => {
  // Years Arr
  const years = [];
  for (let year = 1970; year <= 2024; year++) {
    years.push(year);
  }

  return (
    <div className="movie-robot">
      <div className="title">
        <h5 className="head">
          <FaRobot className="icon" />
          Film Robotu
        </h5>
      </div>
      <div className="label-group">
        <label className="filter-label">
          <select name="imdb1" id="imdb1" className="select imdb">
            <option value="imdb">IMDb Puanına Göre</option>
            <option value="view">İzlenmeye Göre</option>
            <option value="like">Beğeniye Göre</option>
            <option value="comment-count">Yorum Sayısına Göre</option>
            <option value="date">Eklenme Tarihine Göre</option>
            <option value="name">Alfabetik</option>
          </select>
        </label>
        <label className="filter-label">
          <select name="alphabet" id="alphabet" className="select alphabet">
            <option value="DESC">Z-A / 9-0</option>
            <option value="ASC">A-Z / 0-9</option>
          </select>
        </label>
      </div>
      <label className="filter-label">
        <select name="min_imdb" id="min_imdb" className="select">
          <option value>Min IMDb Puanı</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </label>
      <label className="filter-label">
        <select name="year" id="year" className="select">
          <option value>Yapım yılı</option>
          {years.reverse().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <label className="filter-label">
        <select name="category" id="category" className="select">
          <option value>Kategori</option>
          {categories.map((categories) => (
            <option key={categories} value={categories}>
              {categories}
            </option>
          ))}
        </select>
      </label>
      <label className="filter-label">
        <select name="language" id="language" className="select">
          <option value>Dil</option>
          <option value="Türkçe Dublaj">Türkçe Dublaj</option>
          <option value="Türkçe Altyazılı">Türkçe Altyazılı</option>
          <option value="Yerli Film">Yerli Film</option>
        </select>
      </label>
      <button type="submit" className="submit-btn">
        <FaFilter className="icon" />
        Filmleri Filtrele
      </button>
    </div>
  );
};

export default MovieRobot;
