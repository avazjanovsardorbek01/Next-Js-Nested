"use client";
import { homeIcon, strelkaRightIcon } from "@/assets/icons/global";
import { CaruselCard } from "@/components/ui/card";
import { Slider, Spin } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import useProductStore from "@/store/products-store";
import { CaruselProduct } from "@/components/ui";
import useWishlistStore from "@/store/wishlist-store";

const Products = () => {
  const { data, getAll, isLoading, totalCount } = useProductStore();
  const { datawishlist, getAllWishlist } = useWishlistStore();

  useEffect(() => {
    getAll({ page: 1, limit: 12, name: "" });
    getAllWishlist({ page: 1, limit: 100 });
  }, []);

  const isProductLiked = (productId: string) => {
    return datawishlist.some(
      (wishlistItem) => wishlistItem.product_id === productId
    );
  };

  return (
    <div className="bg-[#F2F2F2] py-5">
      <div className="container">
        <div className="flex gap-3 items-center text-gray-600 pb-5">
          {homeIcon} <Link href={"/"}>Главная</Link> {strelkaRightIcon}
          <Link href={"/products"}>Продукты</Link>
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-[20%]">
            <div className="bg-[#E4E4E4] rounded-lg w-[292px]">
              <div className="w-[292px] bg-white rounded-lg p-[18px] grid gap-6">
                <h3 className="text-center text-xl">Филтрь</h3>

                <div>
                  <label className="block text-gray-700 text-[13px] mb-[5px]">
                    Цена
                  </label>
                  <div className="w-[256px] h-[82px] bg-[#F2F2F2] rounded-md p-4">
                    <Slider
                      range={{ draggableTrack: true }}
                      defaultValue={[20, 50]}
                    />
                    <div className="flex justify-between">
                      <span>3 000 uzs</span>
                      <span>40 000 uzs</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="artikul"
                    className="block text-gray-700 text-[13px]"
                  >
                    Артикул:
                  </label>
                  <input
                    type="text"
                    id="artikul"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                    placeholder="аф566"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-gray-700 text-[13px]"
                  >
                    Выберите категорию:
                  </label>
                  <select
                    id="category"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option>Все</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="new"
                    className="block text-gray-700 text-[13px]"
                  >
                    Новинка:
                  </label>
                  <select
                    id="new"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option>Все</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="sale"
                    className="block text-gray-700 text-[13px]"
                  >
                    Акция:
                  </label>
                  <select
                    id="sale"
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option>Все</option>
                  </select>
                </div>
              </div>
              <button className="py-2 w-full">Показать результат</button>
            </div>
          </div>

          <div className="w-[80%] pl-14">
            {isLoading ? (
              <div className="w-full flex items-center justify-center">
                <Spin size="large" />
              </div>
            ) : totalCount > 0 ? (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.map((item) => (
                    <CaruselCard
                      key={item.product_id}
                      productData={item}
                      cardUI={{ text: "", bg: "" }}
                      isliked={isProductLiked(item.product_id)}
                    />
                  ))}
                </div>
                <button className="w-full py-3 rounded-md bg-white">
                  Показать ещё
                </button>
              </div>
            ) : (
              <h1 className="text-center text-2xl text-gray-400 mt-20">
                Malumot topilmadi
              </h1>
            )}
          </div>
        </div>

        <div className="pt-[76px]">
          <h1 className="text-[32px] mb-[31px]">Реконмендуемые продукты</h1>
          <div>
            <CaruselProduct text="Акция" bg="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
