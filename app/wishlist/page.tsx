"use client";
import { useEffect } from "react";
import useWishlistStore from "@/store/wishlist-store";
import { CaruselCard } from "@/components/ui/card";

const WishlistPage = () => {
  const { datawishlist, getAllWishlist } = useWishlistStore();

  useEffect(() => {
    getAllWishlist({ page: 1, limit: 100 });
  }, []);

  return (
    <div>
      
      <div className="flex gap-3 flex-wrap container">
      {datawishlist.map((item) => (
        <CaruselCard
        key={item.product_id}
        productData={item}
        cardUI={{ text: "", bg: "" }}
        isliked={true}
        />
      ))}
      </div>
    </div>
  );
};

export default WishlistPage;
