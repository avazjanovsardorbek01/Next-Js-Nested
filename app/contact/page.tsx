import { eyeIcon } from "@/assets/icons/global";
import { CaruselProduct } from "@/components/ui";

const Contact = () => {
  return (
    <section className="bg-[#F2F2F2] pb-[120px] pt-[80px] ">
      <div className="container mx-auto px-2 5">
        <h1 className="text-[32px] font-medium mb-[30px]">
          Полезные информации
        </h1>
        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
            <div
              key={el}
              className="min-w-[608px] w-full min-h-[417px] h-full py-[38px] px-[35px] bg-white rounded-md"
            >
              <h1 className="text-[32px] font-medium mc-[30px]">
                Как правильно выбрать эллиптический тренажер?
              </h1>
              <p className="text-[16px] leading-[22px]">
                Эллиптические тренажёры популярны среди людей любого возраста и
                с разным уровнем физической подготовкb Эллиптические тренажёры
                популярны среди людей любого возраста и с разным уровнем
                физической подготовки...
              </p>
              <div className="pt-[130px]">
                <div className="flex items-center gap-10 ">
                  <p className="text-[12px] flex items-center gap-2">
                    <i className="bi bi-calendar"></i>27.01.2022
                  </p>
                  <p className="text-[12px] flex items-center gap-2">
                    {eyeIcon} 250
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className=" bg-transparent py-[15px] px-10 rounded-md border-2 border-[#FBD029] mt-[30px] text-[20px] hover:bg-[#FBD029] duration-300 active:bg-transparent">
          Показать ещё
        </button>
        <div className="pt-[76px]">
          <h1 className="text-[32px] mb-[31px]">Акция</h1>
          <div>
            <CaruselProduct text="Акция" bg="#FF1C1C" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
