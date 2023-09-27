import { Hamburger, ShoppingCart } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="flex items-center justify-between  w-full mx-auto max-w-[900px]   pt-4 pb-6 border-b border-gray-300">
      <div className="flex items-center justify-center gap-2">
        <Hamburger className="text-[#D9480F]" size={32} />
        <h2 className=" text-[18px] md:text-[24px] font-medium " >Senhor Do Pastel</h2>
      </div>

      <button className="header-cart">
        <p className="hidden md:block" >Carrinho</p>
        <ShoppingCart size={24} />
      </button>
    </header>
  );
}
