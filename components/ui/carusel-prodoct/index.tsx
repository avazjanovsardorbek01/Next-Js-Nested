"use client";
// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { all_mages } from "@/assets/images";

// Install Swiper modules
SwiperCore.use([Navigation]);

import { CaruselCard } from "../card";

interface Props {
  text?: string;
  bg?: string;
}

const Carusel = ({ text, bg }: Props) => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1900: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper bg"
      >
        {all_mages.map((img, index) => (
          <SwiperSlide key={index} style={{ borderRadius: 10 }}>
            {/* <CaruselCard text={text} bg={bg} img={img} /> */}
            <div className="w-[200px] h-[330px]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carusel.displayName = "Carusel";
export default Carusel;
