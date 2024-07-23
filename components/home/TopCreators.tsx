import Rocket from "../../public/image/rockett.svg"
import Image from "next/image";
import Artist from "../../public/image/Artist Card.svg"
import Art from "../../public/image/art.svg"

const Index = () => {
  return (
    <div>
      <div className="top flex items-center justify-between">
        <div>
          <h1 className="text-[28px] lg:text-[38px] font-space-mono">
            Top Creators
          </h1>
          <h3 className="text-[16px] lg:text-[22px] font-space-mono">
            Checkout Top Rated Creators on the NFT Marketplace
          </h3>
        </div>
        <button className="hidden lg:flex items-center gap-2 rounded-[20px] px-12 py-4 border-[#A259FF] border-[2px] hover:scale-110 transition-all duration-300">
          {" "}
          <Image src={Rocket} alt="Hello" /> View Rankings
        </button>
      </div>

      <div className="cards mt-12 hidden lg:grid grid-cols-4 gap-6">
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
        <Image
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
          src={Artist}
          alt="Artist"
          width={240}
          height={240}
        />
      </div>

      <div className="mt-12 lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Image src={Art} alt="Artist" />
        <Image src={Art} alt="Artist" />
        <Image src={Art} alt="Artist" />
        <Image src={Art} alt="Artist" />
        <Image src={Art} alt="Artist" />
        <Image src={Art} alt="Artist" />
      </div>
    </div>
  );
}

export default Index
