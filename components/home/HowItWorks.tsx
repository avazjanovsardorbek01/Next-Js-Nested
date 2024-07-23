import Image from "next/image";
import Work from "../../public/image/Work.svg";
import Workres from "../../public/image/WorkRes.svg";
const Index = () => {
  return (
    <div>
      <div className="top">
        <div>
          <h1 className="text-[28px] lg:text-[38px] font-space-mono">
            How It Works
          </h1>
          <h3 className="text-[16px] lg:text-[22px] font-space-mono">
            Find out how to get started
          </h3>
        </div>
      </div>

      <div className="cards mt-12 hidden md:flex md:gap-8">
        <Image
          className="md:w-[200px] md:h-[327px] xl:w-[330px] lg:h-[440px] hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Work}
          alt="Image"
        />
        <Image
          className="md:w-[200px] md:h-[327px] xl:w-[330px] lg:h-[440px] hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Work}
          alt="Image"
        />
        <Image
          className="md:w-[200px] md:h-[327px] xl:w-[330px] lg:h-[440px] hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Work}
          alt="Image"
        />
      </div>

      <div className="cards mt-12 md:hidden flex flex-col gap-4">
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Workres}
          alt="Image"
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Workres}
          alt="Image"
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Workres}
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Index;
