import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="cart-items flex flex-wrap justify-center pr-96 p-10 bg-[#f1f1f1]">
        <Header/>
        <Menu/>
        <Cart/>
      </div>
    </CartProvider>
  );
}

export default App;
