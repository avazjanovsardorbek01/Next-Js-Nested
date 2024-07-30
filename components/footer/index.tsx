import Image from "next/image";
import logo from "../../assets/icons/logo.svg";

function Footer() {
  return (
    <>
      <div className="w-full h-6 bg-[#FBD029]"></div>
      <div className="w-full pt-5 md:pt-16 pb-11 bg-[#1F1D14] border-b border-[rgba(242,242,242,0.3)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-start justify-between gap-10">
            <Image
              src={logo}
              alt="logo"
              className="w-[150px] h-[45px] md:w-[189px] md:h-[59px]"
            />
            <div className="flex flex-col gap-5">
              <p className="text-lg font-bold text-white">Контакты</p>
              <p className="text-white flex items-center gap-2">
                <i className="bi bi-telephone text-white"></i>+998 (90)
                565-85-85
              </p>
              <p className="text-white flex items-center gap-2">
                <i className="bi bi-envelope text-white"></i>info@gmail.com
              </p>
            </div>
            <p className="text-white flex items-start gap-2">
              <i className="bi bi-geo-alt text-white"></i>Tashkent Sh. Chilonzor
              9 kvartal <br /> 12 uy
            </p>
            <div className="w-full md:w-auto">
              <p className="text-lg font-bold text-white">Подписатся</p>
              <form action="#" className="grid gap-4 pt-4">
                <input
                  type="text"
                  className="w-full md:w-70 py-2 px-4 bg-white rounded-sm outline-none text-[#9A9EA5] placeholder:text-[#9A9EA5]"
                  placeholder="support@figma.com"
                />
                <button
                  disabled
                  className="w-full md:w-70 py-2 px-4 bg-[#FBD029] rounded-sm text-center"
                >
                  Отправить
                </button>
              </form>
              <div className="flex items-center justify-center gap-6 pt-10">
                <i className="bi text-white text-2xl bi-instagram"></i>
                <i className="bi text-white text-2xl bi-facebook"></i>
                <i className="bi text-white text-2xl bi-telegram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 bg-[#1F1D14]">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-light text-white">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <div className="text-sm font-light text-white flex flex-wrap items-center gap-4 md:gap-10">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales and Refunds</span>
            <span>Legal</span>
            <span>Site Map</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
