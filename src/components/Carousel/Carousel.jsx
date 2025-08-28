import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import './Carousel.css'
import Slide1 from "../../assets/doctor3.png"
import C from "../../assets/c.png"

const Carousel = () => {
  return (
    <div className="crousel">
      <div className="crouselInner">
      <Swiper
        modules={[Navigation,Pagination]}
        spaceBetween={10}
        onSlideChange={()=>console.log("slide changed")}
        onSwiper={(swiper)=>console.log(swiper)}
        loop={true}
        pagination={{ clickable: true}}
        breakpoints={{
          320:{slidesPerView:1},
          640:{slidesPerView:2},
          1024:{slidesPerView:3}
        }}

      >
        <SwiperSlide className="slides" >
            <img src={Slide1} alt="" />
        </SwiperSlide>
         <SwiperSlide className="slides">
            <img src={C} alt="" />
        </SwiperSlide>
         <SwiperSlide className="slides">
            <img src={Slide1} alt="" />
        </SwiperSlide>
         <SwiperSlide className="slides">
            <img src={Slide1} alt="" />
        </SwiperSlide>
         <SwiperSlide className="slides">
            <img src={C} alt="" />
        </SwiperSlide>
         <SwiperSlide className="slides">
            <img src={Slide1} alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
