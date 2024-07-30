"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/types/product-types";
import useWishlistStore from "@/store/wishlist-store";
import { getDataFromCookie, setDataFromCookie } from "@/helpers/cookie";
import { eyeIcon } from "@/assets/icons/global";

interface Props {
  productData: Product;
  cardUI: {
    text?: string;
    bg?: string;
  };
  isliked: boolean;
}

function Index({ productData, cardUI, isliked }: Props) {
  const router = useRouter();
  const [isLike, setIsLike] = useState(isliked);
  const { create } = useWishlistStore();

  const handleLike = async () => {
    const res: any = await create(productData.product_id);
    setIsLike(res);
  };

  const viewSingleProduct = (product_id: string) => {
    setDataFromCookie("product_id", product_id);
    router.push(`/products/${product_id}`);
  };

  return (
    <div className="group w-full sm:w-[292px] h-auto sm:h-[416px] rounded-md relative overflow-hidden bg-white cursor-pointer">
      {cardUI.bg && (
        <div
          style={{ background: cardUI.bg }}
          className="absolute top-3 left-[-50px] py-2.5 items-center justify-center w-[200px] z-20 rotate-[-41deg]"
        >
          <p className="text-[20px] font-bold text-white text-center">
            {cardUI.text}
          </p>
        </div>
      )}
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleLike();
          }}
          className="absolute top-3 right-3 cursor-pointer z-40"
        >
          {isLike ? (
            <svg
              className="w-6 h-6 text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          )}
        </button>

        <button
          onClick={() => viewSingleProduct(productData.product_id)}
          className="absolute top-11 right-[11px] cursor-pointer z-40 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {eyeIcon}
        </button>
        <div className="mx-auto flex items-center justify-center overflow-hidden">
          <Image
            src={productData.image_url[0]}
            width={202}
            height={174}
            alt="Product Image"
            className="w-full h-[230px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-start px-5">
        <h2 className="text-[20px] text-start mt-5">
          {productData.product_name}
        </h2>
        <p className="text-[20px] font-bold text-[#FF1313] text-start">
          500 000 uzs
        </p>
        <del className="text-[16px] text-start text-[#1F1D14] opacity-[0.4]">
          750 000
        </del>
      </div>
      <button
        className="flex w-full items-center justify-center gap-3 py-[15px] bg-[#FBD029] rounded-br-md rounded-bl-md absolute bottom-0"
        onClick={(e) => {
          e.stopPropagation();
          viewSingleProduct(productData.product_id);
        }}
      >
        <i className="bi bi-cart3"></i>
        Корзина
      </button>
    </div>
  );
}

export default Index;
