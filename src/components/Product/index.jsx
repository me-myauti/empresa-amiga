import { Plus } from "@phosphor-icons/react";
import { useCart } from "../Context/CartContext";

export default function Product({ name, description, price, icon }) {
  const formatNumber = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const { addItemToCart } = useCart();

  return (
    <div className="mt-4 flex flex-col">
      <div className=" flex md:hidden gap-4 border border-gray-300 hover:border-[#D9480F] transition-colors rounded p-2">
        <div className="pt-1">{icon}</div>

        <div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[22px] font-medium text-[#1a1a1a]">{name}</p>
              </div>

              <div className="w-full h-full">
                <p className="text-black/60 text-[12px]  md:text-[16px]">
                  {description}
                </p>
              </div>

              <div>
                <p>{formatNumber}</p>
              </div>
            </div>
          </div>

          <button className="add-cart h-10 gap-2 px-4 mt-4">
            Adicionar
            <Plus size={24} />
          </button>
        </div>
      </div>

      <div className=" hidden  md:flex items-center justify-between gap-4 border border-gray-300 hover:border-[#D9480F] transition-colors rounded p-2">
        <div className="flex  justify-center gap-2" >
          <div className="pt-1">{icon}</div>

          <div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[22px] font-medium text-[#1a1a1a]">
                    {name}
                  </p>
                </div>

                <div className="w-full h-full">
                  <p className="text-black/60 text-[12px]  md:text-[16px]">
                    {description}
                  </p>
                </div>

                <div>
                  <p>{formatNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="add-cart h-10 w-10 " onClick={addItemToCart}>
            <Plus size={24} />
          </button>
      </div>
    </div>
  );
}
