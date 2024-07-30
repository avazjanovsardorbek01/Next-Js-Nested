"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.scss";
import ImageCarusel from "../../../assets/images/img-carusel1.png";
import { mainPageStIcon } from "@/assets/icons/global";

const Carusel = () => {
  const imgList = [ImageCarusel, ImageCarusel, ImageCarusel];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="min-w-[820x] cursor-pointer"
    >
      {imgList.map((item, index) => {
        return (
          <SwiperSlide key={index} className="w-[820x] rounded-[20px]">
            <div className="h-[488px] w-full rounded-[20px] overflow-hidden ">
              <div className="flex items-start justify-between">
                <div className="grid ml-14 mt-16">
                  <b className="text-[32px] text-start">
                    Бутсы Nike Phantom <br />
                    GT2 Elite FG
                  </b>
                  <button className="border border-[#FBD029] rounded-lg mt-16 p-2 w-44">
                    Подробности
                  </button>
                </div>
                <span className="absolute z-30 bottom-[31px] left-[40%]">
                  {mainPageStIcon}
                </span>
                <div className="relative h-[488x]">
                  <div className=" absolute top-[55px] left-[20px] w-[380px] h-[380px] rounded-[50%] bg-red-500 z-0"></div>
                  <div className="absolute top-[-75px] left-[130px]  rotate-[25deg] w-[355px] h-[921px]  bg-[#BDD400] z-0" />
                  <div className="sticky z-10  pr-5">
                    <Image
                      src={item}
                      alt="Carusel img"
                      className="w-[428px] h-[438px] z-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

Carusel.displayName = "Carusel";
export default Carusel;
