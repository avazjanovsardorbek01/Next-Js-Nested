"use client";
import { homeIcon, strelkaRightIcon } from "@/assets/icons/global";
import { CaruselCard } from "@/components/ui/card";
import { Slider, Spin } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import useProductStore from "@/store/products-store";
import useWishlistStore from "@/store/wishlist-store";
import Skokalka from "@/assets/images/skokalka.png";
import Shtanga from "@/assets/images/штанга.png";
import Ganteli from "@/assets/images/ganteli.png";

const Products = () => {
  const { data, getAll, isLoading, totalCount } = useProductStore();
  const { datawishlist, getAllWishlist } = useWishlistStore();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    priceRange: [20, 50],
    artikul: "",
    new: "",
    sale: "",
  });

  useEffect(() => {
    getAll({ page, limit: 12, ...filters });
    getAllWishlist({ page: 1, limit: 100 });
  }, [getAll, getAllWishlist, page, filters]);

  const isProductLiked = (productId) => {
    return datawishlist.some(
      (wishlistItem) => wishlistItem.product_id === productId
    );
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handlePriceChange = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, priceRange: value }));
  };

  return (
    <div className="bg-[#F2F2F2] py-5">
      <div className="container">
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
                      value={filters.priceRange}
                      onChange={handlePriceChange}
                    />
                    <div className="flex justify-between">
                      <span>{filters.priceRange[0]} uzs</span>
                      <span>{filters.priceRange[1]} uzs</span>
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
                    name="artikul"
                    value={filters.artikul}
                    onChange={handleFilterChange}
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
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option value="">Все</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
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
                    name="new"
                    value={filters.new}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option value="">Все</option>
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
                    name="sale"
                    value={filters.sale}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full rounded-md p-2.5 bg-[#F2F2F2] outline-none"
                  >
                    <option value="">Все</option>
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
                  {data.length > 0 ? (
                    data.map((item) => (
                      <CaruselCard
                        key={item.product_id}
                        productData={item}
                        cardUI={{ text: "", bg: "" }}
                        isliked={isProductLiked(item.product_id)}
                      />
                    ))
                  ) : (
                    <h1 className="text-center text-2xl text-gray-400 mt-20">
                      No products found
                    </h1>
                  )}
                </div>
                {totalCount > data.length && (
                  <button
                    onClick={handleLoadMore}
                    className="w-full py-3 rounded-md bg-white"
                  >
                    Показать ещё
                  </button>
                )}
              </div>
            ) : (
              <h1 className="text-center text-2xl text-gray-400 mt-20">
                Malumot topilmadi
              </h1>
            )}
          </div>
        </div>

        <div className="pt-[76px]">
          <h1 className="text-[32px] mb-[31px]">Рекомендованные продукты</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* Static cards for recommended products */}
            <CaruselCard
              productData={{
                product_id: "1",
                product_name: "Бутса Nike Mercurial Superfly 8 FG",
                price: "1000 uzs",
                image_url: [Skokalka],
              }}
              cardUI={{ text: "", bg: "" }}
              isliked={false}
            />
            <CaruselCard
              productData={{
                product_id: "1",
                product_name: "Бутса Nike Mercurial Superfly 8 FG",
                price: "1000 uzs",
                image_url: [Ganteli],
              }}
              cardUI={{ text: "", bg: "" }}
              isliked={false}
            />
            <CaruselCard
              productData={{
                product_id: "2",
                product_name: "Бутса Nike Mercurial Superfly 8 FG",
                price: "2000 uzs",
                image_url: [Shtanga],
              }}
              cardUI={{ text: "", bg: "" }}
              isliked={false}
            />
            <CaruselCard
              productData={{
                product_id: "3",
                product_name: "Бутса Nike Mercurial Superfly 8 FG",
                price: "250 000 uzs",
                image_url: [Skokalka],
              }}
              cardUI={{ text: "", bg: "" }}
              isliked={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
