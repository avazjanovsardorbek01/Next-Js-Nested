import { strelka } from "@/assets/images";
import Brands from "@/components/sections/Brands";
import Примущества from "@/components/sections/Примущества";
import Полезное from "@/components/sections/Полезное";
import { Carusel, CaruselCatalog, CaruselProduct } from "@/components/ui";
import { Card1 } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="pt-5 pb-[83px] bg-[#F2F2F2]">
        <div className="container mx-auto px-2.5">
          <div className="flex flex-col lg:flex-row items-start gap-[24px]">
            <div className="w-full lg:min-w-[819px] lg:h-[488px]">
              <Carusel />
            </div>
            <div className="w-full lg:w-auto mt-4 lg:mt-0">
              <Card1 />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2.5">
          <div className="py-[24px]">
            <h1 className="text-2xl lg:text-[32px] mb-[31px]">Каталог</h1>
            <div>
              <CaruselCatalog />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F2F2] pb-[80px]">
        <div className="container mx-auto px-2.5">
          <div className="pt-[76px]">
            <h1 className="text-2xl lg:text-[32px] mb-[31px]">Акция</h1>
            <div>
              <CaruselProduct text="Акция" bg="#FF1C1C" />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[24px] lg:text-[32px] mb-[31px]">Новинки</h1>
            <div>
              <CaruselProduct text="Новый" bg="#917BFF" />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-2xl lg:text-[32px] mb-[31px]">Продукты</h1>
            <div>
              <CaruselProduct />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-2xl lg:text-[32px] mb-[31px]">ТОП продажа</h1>
            <div>
              <CaruselProduct text="ТОП" bg="#10DE24" />
            </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-2xl lg:text-[32px] mb-[31px]">Полезное</h1>
            <div>
              <Полезное />
            </div>
          </div>
          {/* <div className="pt-[76px]">
            <h1 className="text-2xl lg:text-[32px] mb-[31px]">Примущества</h1>
            <div>
              <Примущества />
            </div>
          </div> */}

          <div className="pt-[76px]">
            <h1 className="text-2xl lg:text-[32px] mb-[31px]">O нас</h1>
            <div className="bg-[#1F1D14] text-white p-16 flex rounded-lg">
              <div className="w-[80%]">
                <h1 className="text-">
                  Интернет магазин спортивных товаров{" "}
                  <a href="#" className="text-white underline">
                    7MARKETSPORT.UZ
                  </a>{" "}
                  предлагает широкий ассортимент продукции с доставкой по
                  Ташкенту, области и другим регионам Узбекистана. Ведется
                  работа как с розничными покупателями, так и с оптовыми
                  клиентами. Разнообразие форм оплаты заметно упрощает процесс
                  приобретения товара. Действует гибкая система скидок.
                  Разнообразие форм оплаты заметно упрощает процесс приобретения
                  товара. Действует гибкая система скидок.
                </h1>
              </div>
              <div className="w-[20%] flex items-end justify-end">
                <Link href="/about">
                  <Image src={strelka} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-[76px]">
            <div>
              <Brands />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
