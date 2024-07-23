import Image from "next/image";
import HeroImage from "../../public/image/hero.svg";
import Rocket from "../../public/image/RocketLaunch.svg";

const Index = () => {
  return (
    <div>
      <div className="md:flex sm:gap-4 lg:gap-8 w-full mt-20">
        <div className="left md:w-1/2 flex flex-col lg:gap-8 gap-4">
          <h1 className="text-2xl sm:leading-[45px] md:leading-[75px] sm:text-3xl lg:text-[73px] font-work-sans font-semibold">
            Discover Digital Art & Collect NFTs
          </h1>
          <h3 className="text-[16px] lg:text-[22px] text-[#FFFFFF] opacity-80 font-space-mono">
            NFT marketplace UI created with Anima for Figma. Collect, buy, and
            sell art from more than 20k NFT artists.
          </h3>
          <button className="flex items-center gap-2 bg-purple-600 rounded-full px-5 py-3 font-semibold font-space-mono text-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 justify-center">
            <Image
              src={Rocket}
              alt="Rocket icon in button"
              width={20}
              height={20}
            />
            Get Started
          </button>
          <div className="flex gap-4 justify-between w-full md:w-3/4 xl:w-4/5">
            <div className="text-center">
              <h1 className="text-[20px] font-space-mono lg:text-[28px] font-bold">
                240k+
              </h1>
              <h3 className="text-[15px] lg:text-[22px] font-space-mono">
                Total Sale
              </h3>
            </div>
            <div className="text-center">
              <h1 className="text-[20px] font-space-mono lg:text-[28px] font-bold">
                100k+
              </h1>
              <h3 className="text-[15px] lg:text-[22px] font-space-mono">
                Auctions
              </h3>
            </div>
            <div className="text-center">
              <h1 className="text-[20px] font-space-mono lg:text-[28px] font-bold">
                240k+
              </h1>
              <h3 className="text-[15px] lg:text-[22px] font-space-mono">
                Artists
              </h3>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2 flex justify-center md:justify-end">
          <Image
            className="lg:w-[530px] lg:h-[530px] md:w-[340px] md:h-[340px] rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            src={HeroImage}
            alt="Hero"
            width={315}
            height={315}
          />
        </div>
      </div>
    </div>
  );
}

export default Index
