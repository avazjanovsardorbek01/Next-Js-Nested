import Image from "next/image";
import eye from "../../public/image/Eye.svg"
import Card from "../../public/image/NFT Card.svg"
import Card2 from "../../public/image/NFT Card2.svg"
import Card3 from "../../public/image/NFT Card3.svg";

const Index = () => {
  return (
    <div>
      <div className="top flex items-center justify-between">
        <div>
          <h1 className="text-[28px] lg:text-[38px] font-space-mono">
            Discover More NFTs
          </h1>
          <h3 className="text-[16px] lg:text-[22px] font-space-mono">
            Explore new trending NFTs
          </h3>
        </div>
        <button className="hidden lg:flex items-center gap-2 rounded-[20px] px-12 py-4 border-[#A259FF] border-[2px] hover:scale-110 transition-all duration-300">
          {" "}
          <Image src={eye} alt="Hello" /> See All
        </button>
      </div>

      <div className="cards flex w-full justify-between lg:justify-start gap-8 lg:gap-12 mt-12">
        <Image
          className=" hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Card}
          alt="Product Card"
          width={325}
          height={530}
        />
        <Image
          className="hidden md:flex hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Card2}
          alt="Product Card"
          width={325}
          height={530}
        />
        <Image
          className="hidden xl:flex hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Card3}
          alt="Product Card"
          width={325}
          height={530}
        />
      </div>
    </div>
  );
}

export default Index
