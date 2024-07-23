import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../../public/image/logo.svg";
import User from "../../public/image/User.svg";
import Burger from "../../public/image/Burger Menu.svg";
import "../../app/globals.css";

const Index = () => {
  const links = [
    // { path: "/", title: "Home" },
    { path: "/marketplace", title: "Marketplace" },
    { path: "/rankings", title: "Rankings" },
    { path: "/wallet", title: "Connect Wallet" },
  ];

  return (
    <header className="py-6 flex justify-between items-center px-4 md:px-8 lg:px-10">
      <div className="left cursor-pointer">
        <Image src={Logo} alt="Site Logo" width={200} height={200} />
      </div>
      <div className="right flex gap-8 items-center">
        <div className="flex lg:hidden">
          <Image src={Burger} alt="Login" width={30} height={30} />
        </div>
        <div className="items-center gap-16 hidden lg:flex">
          {links.map((item, index) => {
            return (
              <Link className="nav text-[#FFFFFF]" key={index} href={item.path}>
                {item.title}
              </Link>
            );
          })}
          <button className="flex items-center gap-2 bg-[#A259FF] rounded-[20px] px-5 py-2 font-semibold font-space-mono">
            <Image src={User} alt="Button Icon" width={20} height={20} />
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Index;
