"use client";
import { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { getSingleProduct } from "@/service/product.service";
import img from "@/assets/images/Star.png";
import productPlaceholder from "@/assets/images/skokalka.png";
import { CaruselCard } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const SingleProductPage = () => {
  const [product, setProduct] = useState<any>({});
  const router = useRouter();

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "400px",
    color: "#1F1D14",
    textAlign: "center",
    background: "#fff",
  };

  const getData = async () => {
    const res = await getSingleProduct();
    if (res && res.data) {
      setProduct(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Используем статичное изображение для карусели
  const staticImages = [
    productPlaceholder,
    productPlaceholder,
    productPlaceholder,
  ]; // Пример массива изображений

  // Определение рекомендованных продуктов
  const recommendedProducts = [
    {
      product_id: "1",
      product_name: "Бутса Nike Mercurial Superfly 8 FG",
      price: "1000 uzs",
      image_url: [productPlaceholder],
    },
    {
      product_id: "2",
      product_name: "Гантель виниловая, 2 х 3 кг",
      price: "2000 uzs",
      image_url: [productPlaceholder],
    },
    {
      product_id: "3",
      product_name: "Штанга",
      price: "2500 uzs",
      image_url: [productPlaceholder],
    },
    {
      product_id: "4",
      product_name: "Кроссовки Adidas",
      price: "3000 uzs",
      image_url: [productPlaceholder],
    },
  ];

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-[#f2f2f2]">
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="w-full xl:max-w-[800px] sm:max-w-[500px] sm:h-auto xl:h-auto sm:mb-[240px] xl:mb-[50px]">
          <Carousel arrows infinite autoplay>
            {staticImages.map((image, index) => (
              <div key={index}>
                <div
                  style={contentStyle}
                  className="relative flex justify-center items-center px-2 text-[#1F1D14]"
                >
                  <div className="grid justify-center items-center">
                    <Image
                      src={image}
                      width={350}
                      height={350}
                      className="bg-contain"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-full xl:w-[400px] h-auto gap-5 bg-white p-7">
          <h1 className="text-[32px] font-medium">{product.product_name}</h1>
          <p className="text-[14px] mt-2 mb-2 font-normal">
            {product.description}
          </p>
          <p>
            В комплекте:
            <span className="font-semibold ml-3">{product.count + " шт"}</span>
          </p>
          <p>
            Страна производства:
            <span className="font-semibold ml-3">{product.made_in}</span>
          </p>
          <p>
            Макс и Мин возраст:
            <span className="font-semibold ml-3">
              {product.age_min + " - " + product.age_max}
            </span>
          </p>
          <p>
            Цвет:
            <span className="font-semibold ml-3">{product.color}</span>
          </p>
          <p>
            Для:
            <span className="font-semibold ml-3">{product.for_gender}</span>
          </p>
          <span className="mt-7 mb-5 text-[24px]">
            {"Цена: " + product.cost}
          </span>
          <div className="mt-5 mb-5 flex gap-3">
            <button
              className="w-[120px] h-[40px] bg-[#FBD029] text-black rounded-md"
              onClick={() => router.push("/basket")}
            >
              Корзина
            </button>
            <button className="w-[120px] h-[40px] border-[#FBD029] border-2 rounded-md">
              Сравнить
            </button>
          </div>
        </div>

        <div className="w-full mt-8 flex flex-wrap items-center justify-center mb-[70px] gap-8">
          <div className="flex flex-col items-center">
            <h1 className="xl:text-[24px] sm:text-[14px] font-semibold text-center">
              Описание
            </h1>
            <div className="bg-white xl:w-[500px] sm:w-[300px] xl:h-[500px] sm:h-[300px] xl:py-[70px] sm:py-[20px] xl:px-[70px] sm:px-[20px] flex flex-col items-center rounded-lg shadow-md">
              <h1 className="xl:text-[24px] sm:text-[18px] font-semibold text-center">
                {product.product_name}
              </h1>
              <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px] text-center">
                {product.description}
              </p>
              <ul className="flex flex-wrap gap-4 justify-center">
                <li className="xl:w-[150px] sm:w-[100px] text-center">
                  <h3 className="sm:text-[12px] xl:text-[20px]">
                    Вес гантела:
                  </h3>
                  <p className="sm:text-[10px] xl:text-[18px]">5кг</p>
                </li>
                <li className="xl:w-[150px] sm:w-[100px] text-center">
                  <h3 className="sm:text-[12px] xl:text-[20px]">Цвета:</h3>
                  <p className="sm:text-[10px] xl:text-[18px]">
                    Синий, Красный
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="xl:text-[24px] font-semibold sm:text-[16px] text-center">
              Отзывы
            </h1>
            <div className="xl:w-[500px] xl:h-[500px] bg-white xl:py-[40px] sm:py-[20px] xl:px-[70px] sm:px-[20px] sm:w-[300px] sm:h-[300px] flex flex-col items-center rounded-lg shadow-md">
              <div className="w-[400px] flex flex-col items-center">
                <h1 className="xl:text-[20px] sm:text-[14px]">
                  Шахзод Анваров
                </h1>
                <h2 className="xl:text-[16px] sm:text-[12px] opacity-[0.7] xl:mb-5 sm:mb-1">
                  клиент
                </h2>
                <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px] text-center">
                  В составе томатов в большом количестве содержатся сахара,
                  клетчатка, пектины, бета-каротин, витамины.
                </p>
                <Image
                  src={img}
                  alt="Star Rating"
                  className="xl:mt-5 sm:mb-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-8">
          <h1 className="xl:text-[24px] font-semibold sm:text-[16px] text-start">
            Похожие продукты
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((item) => (
              <CaruselCard
                key={item.product_id}
                productData={item}
                cardUI={{ text: "", bg: "" }}
                isliked={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
