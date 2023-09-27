import Product from "../Product";
import PASTEL from "../../variables/pastel";
import LANCHE from "../../variables/lanche";
import BEBIDA from "../../variables/bebida";
import { Hamburger, BeerBottle } from "@phosphor-icons/react";

export default function Menu() {
  return (
    <main className="mt-10">
      <div className="flex flex-col gap-8" >

        <div>
          <h2 className="text-[22px] text-orange-600 font-medium">Lanche</h2>
          {LANCHE.map((product)=>(
              <Product 
                key={product.id}
                name={product.nome}
                description={product.descricao}
                price={product.preco}
                icon={<Hamburger className="w-16 h-16"/>}
              />
          ))}
        </div>

        <div className="w-full h-[1px] bg-gray-300" />

        <div>
          <h2 className="text-[22px] text-orange-600 font-medium">Pastel</h2>
          {PASTEL.map((product)=>(
              <Product 
                key={product.id}
                name={product.nome}
                description={product.descricao}
                price={product.preco}
                icon={<Hamburger />}
              />
          ))}
       
        </div>

        <div className="w-full h-[1px] bg-gray-300" />

        <div>
          <h2 className="text-[22px] text-orange-600 font-medium">Bebidas</h2>
          {BEBIDA.map((product)=>(
              <Product 
                key={product.id}
                name={product.nome}
                description={product.descricao}
                price={product.preco}
                icon={<BeerBottle />}
              />
          ))}
        </div>

      </div>
    </main>
  );
}
