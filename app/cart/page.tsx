"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import click from "@/assets/images/click.png";
import payme from "@/assets/images/payme.png";
import Link from "next/link";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await basket.get(); // Замените на ваш API запрос
        console.log("API Response:", response);
        const initializedProducts = response.data.map((product: any) => ({
          ...product,
          count: product.count || 0,
        }));
        setProducts(initializedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const incrementCount = (id: number) => {
    setProducts(
      products.map((product) =>
        product.product_id === id
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  const decrementCount = (id: number) => {
    setProducts(
      products.map((product) =>
        product.product_id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const deleteCard = async (id: number) => {
    const updatedProducts = products.filter(
      (product) => product.product_id !== id
    );
    setProducts(updatedProducts);
    try {
      await basket.basketdel(id); // Замените на ваш API запрос
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Failed to delete product. Please try again later.");
    }
  };

  const deleteAllCards = () => {
    setProducts([]);
    localStorage.removeItem("carProducts");
  };

  const totalQuantity = products.reduce(
    (total, product) => total + product.count,
    0
  );

  const totalPrice = products.reduce(
    (total, product) => total + product.count * product.cost,
    0
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#F2F2F2]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span className="text-black text-2xl">X</span>
          ) : (
            <span className="text-black text-2xl">☰</span>
          )}
        </button>
      </div>
      <div className="bg-[#F2F2F2] pt-2 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-1">
          <div className="flex gap-2 sm:gap-4 pb-4 items-center">
            <Link href="/">
              <p className="text-sm sm:text-base text-gray-600 hover:text-[#FBD029]">
                Главная
              </p>
            </Link>
            <span className="text-sm sm:text-base text-gray-600">/</span>
            <Link href="/shopping">
              <p className="text-sm sm:text-base text-gray-600 hover:text-[#FBD029]">
                Корзина
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
            <div className="w-full max-w-full sm:max-w-md lg:max-w-[600px] bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center pb-4">
                <h1 className="text-lg sm:text-2xl font-bold">Ваша корзина</h1>
                <button
                  onClick={deleteAllCards}
                  className="text-red-500 text-sm font-medium sm:text-base"
                >
                  Очистить все
                </button>
              </div>
              <div className="space-y-4 rounded-md">
                {products.map((product) => (
                  <div
                    key={product.product_id}
                    className="flex flex-col bg-[#F2F2F2] sm:flex-row border rounded-lg overflow-hidden p-4 relative"
                  >
                    <button
                      onClick={() => deleteCard(product.product_id)}
                      className="absolute top-2 right-2 text-red-500"
                    >
                      <span className="text-red-500">X</span>
                    </button>
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                        <Image
                          src={product.image_url[0]}
                          alt={product.product_name}
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="font-bold text-lg mb-2">
                          <h1 className="text-base sm:text-lg">
                            {product.product_name}
                          </h1>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => decrementCount(product.product_id)}
                            className="bg-white border rounded-full w-8 h-8 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span>{product.count}</span>
                          <button
                            onClick={() => incrementCount(product.product_id)}
                            className="bg-white border rounded-full w-8 h-8 flex items-center justify-center"
                          >
                            +
                          </button>
                          <span className="text-lg font-medium">
                            {(product.count * product.cost).toLocaleString()}{" "}
                            uzs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="pt-4 text-blue-600">Все информация о доставке</h3>
              <p className="text-gray-600">
                Если у вас имеются вопросы, позвоните по номеру:{" "}
                <span className="text-blue-600">+998 (99) 995 55 65</span>
              </p>
            </div>
            <div className="w-full max-w-full sm:max-w-md lg:max-w-[600px] mt-6 lg:mt-0 bg-white shadow-lg rounded-lg p-4">
              <div className="text-2xl font-bold mb-4">Итого</div>
              <div className="flex justify-between mb-4">
                <p>Кол-во товаров:</p>
                <p className="font-semibold text-lg">{totalQuantity}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Сумма:</p>
                <p className="font-semibold text-lg">
                  {totalPrice.toLocaleString()} UZS
                </p>
              </div>
              <div className="text-lg font-semibold mb-4">Ваши данные</div>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Имя / Фамилия
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    className="border rounded-lg w-full px-3 py-2 text-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Введите номер телефона"
                    className="border rounded-lg w-full px-3 py-2 text-gray-700"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleOpen}
                  className="w-full py-2 px-4 bg-[#FBD029] rounded-lg text-white font-semibold"
                >
                  Оформить заказ
                </button>
              </form>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <Image src={payme} alt="Payme" className="w-12 h-12" />
                <Image src={click} alt="Click" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
