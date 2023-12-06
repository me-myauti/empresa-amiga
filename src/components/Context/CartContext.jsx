import React, { createContext, useContext, useState, useEffect } from "react";
import PASTEL from "../../variables/pastel";
import LANCHE from "../../variables/lanche";
import BEBIDA from "../../variables/bebida";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [showCart, setShowCart] = useState(true);

  const [cartItems, setCartItems] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0
  }) 

  const PRODUCTS = [LANCHE,PASTEL,BEBIDA]
  
  const sharedData = {
    totalItens: 0,
    totalPrice: 0,
    cartItems: cartItems,
    
    showCart: showCart,
    
    toggleComponent: () => {
      setShowCart(showCart => !showCart)
    },
    
    addToCart: (id) => {
      setCartItems(cartItems => ({...cartItems,[id]: cartItems[id] + 1}))
    },

    subFromCart: (id) => {
      setCartItems(cartItems => ({...cartItems,[id]: cartItems[id] - 1}))
    },

    removeFromCart: (id) => {
      setCartItems(cartItems => ({...cartItems,[id]: 0}))
    },

    getTotal: () => {
      let totalPriceItem = 0;
      for(const i in cartItems){
        if(cartItems[i] > 0){
          sharedData.totalItens += 1;
          PRODUCTS.forEach(product => {
            if(product.some(item => item.id == Number(i))){
              totalPriceItem = product.find(item => item.id == Number(i))
            }
          })
          sharedData.totalPrice += Math.floor(cartItems[i] * totalPriceItem.preco)
        }
      }
    }
  }

  sharedData.getTotal();

  return (
    <CartContext.Provider value={{ sharedData }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
