import BEBIDA from "../../variables/bebida"
import PASTEL from "../../variables/pastel"
import LANCHE from "../../variables/lanche"
import { useCart } from "../Context/CartContext"
import { Hamburger, BeerBottle, Car } from "@phosphor-icons/react";

export default function Cart(){
  const PRODUCTS = [BEBIDA,PASTEL,LANCHE]

  const { sharedData } = useCart();
  
  const formatPreco = sharedData.totalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={sharedData.showCart ? "hidden" : "border-l-2 border-r-2 border-gray-300 fixed p-4 right-0 top-0 w-80 h-screen overflow-y-scroll" }>
      <h1 className="text-black font-bold text-2xl">Seu Carrinho</h1>
      <h2 className="text-orange-600 font-bold text-2xl border-b border-gray-300">{formatPreco}</h2>
        {PRODUCTS.flatMap(products => products.map(
          p => {
            let icon;
            const precoTotalItem = p.preco * sharedData.cartItems[p.id];

            const icons =  {
              1: <BeerBottle className="w-10 h-10" />,
              2: <Hamburger className="w-10 h-10" />,
            };

            if(p.id >= 1 && p.id <= 7){
              icon = icons['1'];
            }else{
              icon = icons['2'];
            }


            if(sharedData.cartItems[p.id] > 0){
              return ( 
                <div>
                  <div className="product-container flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      {icon}
                      X <p className="text-2xl font-bold pl-2" >{sharedData.cartItems[p.id]}</p>
                    </div>
                    <div className="flex flex-col gap-2 font-bold">
                      <button onClick={() => sharedData.addToCart(p.id)} className="text-orange-600 hover:bg-orange-200 p-2 rounded">+</button>
                      <button onClick={() => sharedData.subFromCart(p.id)} className="text-brack hover:bg-gray-300 p-2 rounded">-</button>
                      <button onClick={() => sharedData.removeFromCart(p.id)} className="text-white bg-orange-600 hover:bg-red-500 p-2 rounded">Remover</button>
                    </div>
                  </div> 
                  
                  <div className="product-details flex items-center space-x-4 italic border-b border-gray-300">
                    <p>{p.nome}</p>
                    <p>-</p>
                    <p>R${precoTotalItem}</p>
                  </div>
                </div>
              );
            }
            return null;
          }
          ))
        }
    </div>
  );
}