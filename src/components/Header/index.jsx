import { ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "../Context/CartContext";
import { Hamburger } from "@phosphor-icons/react";

export default function Header() {

  const {cartItems} = useCart();

  return (
    <header className="flex items-center justify-between  w-full mx-auto max-w-[900px]   pt-4 pb-6 border-b border-gray-300">
      <div className="flex items-center justify-center gap-2">
        <Hamburger />
        <h2 className=" text-[18px] md:text-[24px] font-medium " >Senhor Do Pastel</h2>
      </div>

      <button className="header-cart">
      <p className="hidden md:block">Carrinho</p>
        <div className="relative">
          <ShoppingCart size={24} />
          {cartItems > 0 && (
            <span className="absolute bottom-6 left-7 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems}
            </span>
          )}
        </div>
      </button>
    </header>
  );
}
