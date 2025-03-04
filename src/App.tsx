import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { CartProps } from "./common/types/cart";
import ScrollToTop from "./common/utils/ScrollToTop";
import WithCart from "./common/utils/withCart";
import FooterConfig from "./components/Footer/FooterConfig";
import Header from "./components/Header/Index";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App({ cartItems, cartCount, addToCart, removeFromCart }: CartProps) {
  return (
    <Router>
      <ScrollToTop />
      <Header onSearch={() => {}} cartCount={cartCount} />
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/produto/:id"
            element={<ProductDetailsPage addToCart={addToCart} />}
          />
          <Route
            path="/carrinho"
            element={
              <CartPage
                cartCount={cartCount}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
        </>
      </Routes>
      <FooterConfig />
    </Router>
  );
}

export default WithCart(App);
