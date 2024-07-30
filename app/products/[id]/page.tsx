"use client";
import { getDataFromCookie } from "@/helpers/cookie";

const SingleProductPage = () => {
  const product_id = getDataFromCookie("product_id");

  return (
    <div>
      SingleProductPage id: <span>{product_id}</span>
    </div>
  );
};

export default SingleProductPage;
