"use client";
import {
  A11y,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Mousewheel } from "swiper/modules";
import { Odejdi, VodniSport, Terenajorni } from "@/assets/images/";

const CaruselProduct = ({ text, bg }) => {
  const productData = [
    {
      img: Odejdi,
      name: "Бутсы Nike Phantom GT2 Elite FG",
      price: "550 000 сум",
    },
    {
      img: VodniSport,
      name: "Nike Air Zoom Mercurial Superfly 9 Elite FG",
      price: "2 250 000 сум",
    },
    {
      img: Terenajorni,
      name: "Бутсы Nike Phantom GT2 Elite FG",
      price: "550 000 сум",
    },
    {
      img: Odejdi,
      name: "Nike Air Zoom Mercurial Superfly 9 Elite FG",
      price: "2 250 000 сум",
    },
    {
      img: VodniSport,
      name: "Бутсы Nike Phantom GT2 Elite FG",
      price: "550 000 сум",
    },
    {
      img: Terenajorni,
      name: "Nike Air Zoom Mercurial Superfly 9 Elite FG",
      price: "2 250 000 сум",
    },
    {
      img: Odejdi,
      name: "Бутсы Nike Phantom GT2 Elite FG",
      price: "550 000 сум",
    },
    {
      img: VodniSport,
      name: "Nike Air Zoom Mercurial Superfly 9 Elite FG",
      price: "2 250 000 сум",
    },
  ];

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      freeMode={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[FreeMode, Pagination, Scrollbar, A11y, Mousewheel, Navigation]}
      className="mySwiper w-full"
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
      }}
    >
      {productData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="group w-full sm:w-[292px] h-auto sm:h-[416px] rounded-md relative overflow-hidden bg-white cursor-pointer shadow-md">
            {bg && (
              <div
                style={{ background: bg }}
                className="absolute top-3 left-[-50px] py-2.5 items-center justify-center w-[200px] z-20 rotate-[-41deg]"
              >
                <p className="text-[20px] font-bold text-white text-center">
                  {text}
                </p>
              </div>
            )}
            <div className="relative">
              <div className="mx-auto flex items-center justify-center overflow-hidden">
                <Image
                  src={item.img}
                  width={202}
                  height={174}
                  alt="Product Image"
                  className="w-full hover:scale-95 duration-300  h-[230px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-start px-5 py-4">
              <h2 className="text-[20px] text-start">{item.name}</h2>
              <p className="text-[20px] font-bold text-[#FF1313] text-start">
                {item.price}
              </p>
            </div>
            <button
              className="flex w-full items-center justify-center gap-3 py-[15px] bg-[#FBD029] rounded-br-md rounded-bl-md absolute bottom-0"
              onClick={() => {}}
            >
              <i className="bi bi-cart3"></i>
              Корзина
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CaruselProduct.displayName = "CaruselProduct";
export default CaruselProduct;
