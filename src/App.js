import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import CartShop from "./component/shared/CartShop";
import Detail from "./component/shared/Detail";
import Shop from "./component/Shop";
import CartContextProvider from "./Context/CartContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop/:id" element={<Detail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartShop />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
