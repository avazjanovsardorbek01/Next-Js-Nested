import { calendarIcon, eyeIcon } from "@/assets/icons/global";
import Link from "next/link";
import trinajorny_img from "@/assets/images/terenajorni2.png";
import Image from "next/image";

const Полезное = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="bg-white w-full lg:w-[608px] h-auto lg:h-[417px] rounded-lg p-5 lg:p-[35px] flex flex-col justify-between">
        <div>
          <b className="text-[24px] lg:text-[32px]">
            Как правильно выбрать эллиптический тренажер?
          </b>
          <div className="mt-3 lg:mt-5 text-[14px] lg:text-[16px]">
            Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...
          </div>
        </div>
        <div className="flex items-center gap-5 lg:gap-14 mt-3 lg:mt-0">
          <div className="flex items-center gap-1 text-[14px] lg:text-[16px]">
            {calendarIcon} 27.01.2022
          </div>
          <div className="flex items-center gap-1 text-[14px] lg:text-[16px]">
            {eyeIcon} 250
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[608px] flex flex-col sm:gap-5 lg:gap-0 lg:justify-between">
        <div className="bg-white w-full h-[250px] lg:h-[350px] rounded-lg p-16 lg:p-[35px] flex items-center justify-center">
          <Image
            alt="trinajorny_img"
            src={trinajorny_img}
            className="object-contain sm:"
          />
        </div>
        <div className="bg-white w-full rounded-lg p-3 lg:p-[15px] flex items-center justify-center">
          <Link href="#" className="text-[14px] lg:text-[16px]">
            Посмотрет все
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Полезное;
