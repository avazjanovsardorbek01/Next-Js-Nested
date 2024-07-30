import images from "@/assets/images/Примущества/index";
import Image from "next/image";

const Примущества = () => {
  return (
    <div className="flex justify-between">
      {images.map((image, index) => (
        <div
          className="bg-white w-[292px] h-[289px] rounded-lg flex flex-col justify-between p-8"
          key={index}
        >
          <div className="relative w-50px flex justify-center">
            <div className="bg-[#FBD029] h-[26px] w-[26px] rounded-lg absolute z-10 right-[35%]" />
            <Image alt="img" src={image} className="absolute z-20" />
          </div>
          <h1 className="text-[20px] mb-16">Доставка по всему Узбекистану</h1>
        </div>
      ))}
    </div>
  );
};

export default Примущества;
