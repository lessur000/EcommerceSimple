import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/product/ProductDetails";
import Onsale from "../pages/Onsale";
import NewArrivals from "../pages/NewArrivals";
import FetchProducts from "../components/layout/FetchProducts";
import LoginSignup from "../auth/pages/LoginSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <FetchProducts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/onsale" element={<Onsale />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          {/* authentication routes */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
