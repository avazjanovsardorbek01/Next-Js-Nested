"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  A11y,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import {
  Myachi,
  Obuv,
  Odejdi,
  Terenajorni,
  VodniSport,
  GorniSport,
} from "@/assets/images";
import Image from "next/image";
import "./style.scss";

export default function CaruselCatalog() {
  const catalogData = [
    { label: "Тренажеры", bgColor: "#D3E5F2", img: Terenajorni },
    { label: "Мячи", bgColor: "#F3E9E3", img: Myachi },
    { label: "Спротивные обуви", bgColor: "#DADBE0", img: Obuv },
    { label: "Спортивные одежды", bgColor: "#E2EEC0", img: Odejdi },
    { label: "Водный спорт", bgColor: "#C2BCE8", img: VodniSport },
    { label: "Горный спорт", bgColor: "rgba(171,165,32,0.2)", img: GorniSport },
    { label: "Тренажеры", bgColor: "#D3E5F2", img: Terenajorni },
    { label: "Мячи", bgColor: "#F3E9E3", img: Myachi },
    { label: "Спротивные обуви", bgColor: "#DADBE0", img: Obuv },
    { label: "Спортивные одежды", bgColor: "#E2EEC0", img: Odejdi },
    { label: "Водный спорт", bgColor: "#C2BCE8", img: VodniSport },
    { label: "Горный спорт", bgColor: "rgba(171,165,32,0.2)", img: GorniSport },
  ];

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, FreeMode, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      freeMode={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1536: {
          slidesPerView: 7,
          spaceBetween: 60,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      className="mySwiper"
    >
      {catalogData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-[187px] h-[247px] rounded-lg pt-6 pb-[36px] px-4 flex items-center justify-between flex-col"
            style={{ background: item.bgColor }}
          >
            <div className="text-[20px] text-start">{item.label}</div>
            <div>
              <Image src={item.img} alt={item.label} width={160} height={160} />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
