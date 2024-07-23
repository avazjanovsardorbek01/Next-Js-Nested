import Image from "next/image"
import Space from "../../public/image/Photo.svg"
const Index = () => {
  return (
    <div className="py-12 px-20 bg-[#3B3B3B] rounded-[20px]">
      <div className="card md:flex gap-4 md:gap-20">
        <div className="left">
          <Image src={Space} alt="s" />
        </div>

        <div className="right flex flex-col gap-4">
          <h1 className="text-[28px] lg:text-[38px] font-space-mono">
            Join our weekly digest
          </h1>

          <h3 className="text-[16px] lg:text-[22px] font-space-mono">
            Get exclusive promotions & updates straight to your inbox.
          </h3>
          <div className="buttons flex flex-col lg:flex-row md:mt-12">
            <input
              className="px-5 py-2 font-semibold font-space-mono rounded-[20px] border-none outline-none text-blue-950"
              type="email"
              placeholder="Enter your email here"
            />
            <button className="bg-[#A259FF] rounded-[20px] px-5 py-2 font-semibold font-space-mono">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index
