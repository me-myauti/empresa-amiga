import Header from "./components/Header";
import Menu from "./components/Menu";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen w-full bg-[#f1f1f1] ">
        <div className=" px-4 w-full max-w-[900px] mx-auto pb-12">
          <Header />
          <Menu/>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
