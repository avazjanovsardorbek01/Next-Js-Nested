import Image from "next/image";
import Card from "../../public/image/CategoryCard.svg"

const Index = () => {
  return (
    <div>
      <div>
        <h1 className="text-[28px] lg:text-[38px] font-space-mono">
          Browse Categories
        </h1>
      </div>

      <div className="cards mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
        <Image className="hover:scale-105 transition-all duration-300 cursor-pointer" src={Card} alt="New" />
      </div>
    </div>
  );
}

export default Index
