import brandsData from "@/assets/images/brands";
import Image from "next/image";
const Brands = () => {
  return (
    <div className="container bg-white rounded-lg flex justify-between p-8">
      {brandsData.map((item, index) => (
        <Image src={item} alt="brand img" key={index} />
      ))}
    </div>
  );
};

export default Brands;
