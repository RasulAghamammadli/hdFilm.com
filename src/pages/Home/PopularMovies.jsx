// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { movies } from "../../data";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const PopularMovies = () => {
  return (
    <section className="popular-movies">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id}>{item.name}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularMovies;
