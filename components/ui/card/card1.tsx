import Image from "next/image";

import Imge1 from "../../../assets/icons/GroupCard1.svg";
import Imge2 from "../../../assets/icons/GroupCard2.svg";

function Card() {
  return (
    <div className="flex flex-col gap-4 min-w-[300px] md:min-w-[400px]">
      <Image
        src={Imge1}
        alt="Carusel img"
        className="rounded-lg w-full h-auto"
      />
      <Image
        src={Imge2}
        alt="Carusel img"
        className="rounded-lg w-full h-auto"
      />
    </div>
  );
}

export default Card;
