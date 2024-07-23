import Image from "next/image";
import Card from "../../public/image/card.svg";
import Card2 from "../../public/image/card2.svg";
import Card3 from "../../public/image/card3.svg";

const Index = () => {
  return (
    <div>
      <h1 className="text-[28px] lg:text-[38px] font-space-mono">
        Trending Collection
      </h1>
      <h3 className="text-[16px] lg:text-[22px] font-space-mono">
        Checkout our weekly updated trending collection.
      </h3>

      <div className="cards flex w-full justify-between lg:justify-start lg:gap-12 mt-12">
        <Image className=" hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="Product Card" width={325} height={530} />
        <Image className="hidden md:flex hover:scale-105 transition-all duration-300 cursor-pointer" src={Card2} alt="Product Card" width={325} height={530} />
        <Image className="hidden xl:flex hover:scale-105 transition-all duration-300 cursor-pointer" src={Card3} alt="Product Card" width={325} height={530} />
      </div>
    </div>
  );
};

export default Index;
