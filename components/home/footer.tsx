import Image from "next/image";
import Logo from "../../public/image/logo.svg";
import SocialMedias from "../../public/image/social-medias.svg";

const Index = () => {
  return (
    <div className="bg-[#3B3B3B] text-white p-6 lg:p-12 mt-20">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0">
          <Image className="cursor-pointer" src={Logo} alt="Logo" />

          <h2 className="mt-4 text-base lg:text-lg text-[#CCCCCC]">
            NFT marketplace UI created with Anima for Figma.
          </h2>

          <p className="mt-2 text-sm lg:text-base text-[#CCCCCC]">
            Join our community
          </p>

          <Image
          className="cursor-pointer mt-4"
            src={SocialMedias}
            alt="Social Media Icons"
            width={120}
            height={30}
          />
        </div>

        <div className="mb-6 lg:mb-0">
          <h1 className="text-lg lg:text-xl font-bold">Explore</h1>

          <h3 className="mt-2 text-sm lg:text-base text-[#CCCCCC]">
            Marketplace
          </h3>
          <h3 className="mt-2 text-sm lg:text-base text-[#CCCCCC]">Rankings</h3>
          <h3 className="mt-2 text-sm lg:text-base text-[#CCCCCC]">
            Connect a wallet
          </h3>
        </div>

        <div>
          <h1 className="text-lg lg:text-xl font-bold">
            Join Our Weekly Digest
          </h1>

          <h3 className="mt-4 text-sm lg:text-base text-[#CCCCCC]">
            Get exclusive promotions & updates straight to your inbox.
          </h3>

          <div className="mt-4 flex flex-col lg:flex-row lg:space-x-4">
            <input
              className="px-5 py-2 mb-2 lg:mb-0 rounded-lg text-black outline-none"
              type="email"
              placeholder="Enter your email here"
            />
            <button className="bg-[#A259FF] rounded-lg px-5 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-600" />
      <h4 className="text-sm text-gray-400 text-center">
        Ⓒ NFT Market. Use this template freely.
      </h4>
    </div>
  );
};

export default Index;
