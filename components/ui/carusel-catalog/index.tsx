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
    { label: "Обувь", bgColor: "#DCECE5", img: Obuv },
    { label: "Одежды", bgColor: "#ECE5F1", img: Odejdi },
    { label: "Водные виды спорта", bgColor: "#F2D6D3", img: VodniSport },
    { label: "Горный спорт", bgColor: "#F2D3E8", img: GorniSport },
    { label: "Тренажеры", bgColor: "#D3E5F2", img: Terenajorni },
    { label: "Мячи", bgColor: "#F3E9E3", img: Myachi },
    { label: "Обувь", bgColor: "#DCECE5", img: Obuv },
    { label: "Одежды", bgColor: "#ECE5F1", img: Odejdi },
    { label: "Водные виды спорта", bgColor: "#F2D6D3", img: VodniSport },
    { label: "Горный спорт", bgColor: "#F2D3E8", img: GorniSport },
  ];

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      freeMode={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[FreeMode, Pagination, Scrollbar, A11y]}
      className="mySwiper w-full"
      breakpoints={{
        640: { slidesPerView: 3, spaceBetween: 10 },
        768: { slidesPerView: 4, spaceBetween: 10 },
        1024: { slidesPerView: 5, spaceBetween: 10 },
      }}
    >
      {catalogData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-[187px] rounded-xl p-5 flex justify-between flex-col items-center gap-3 cursor-pointer h-[247px]"
            style={{ backgroundColor: item.bgColor }}
          >
            <p className="w-[90px]">{item.label}</p>
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={item.img}
                alt={item.label}
                width={100}
                height={100}
                objectFit="contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
