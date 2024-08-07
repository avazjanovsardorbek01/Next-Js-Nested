"use client";
import React, { useEffect, useState } from "react";
import { homeIcon, strelkaRightIcon } from "@/assets/icons/global";
import { CaruselCard } from "@/components/ui/card";
import { Slider, Spin } from "antd";
import Link from "next/link";
import useProductStore from "@/store/products-store";
import useWishlistStore from "@/store/wishlist-store";
import { CaruselProduct } from "@/components/ui";

const Index = () => {
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
  }, [page, filters]);

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
    <div className="w-full">
      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <Spin size="large" />
        </div>
      ) : totalCount > 0 ? (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
  );
};

export default Index;
