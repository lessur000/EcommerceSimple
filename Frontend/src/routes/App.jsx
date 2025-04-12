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
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:name" element={<ProductDetails />}></Route>
          <Route path="/onsale" element={<Onsale />}></Route>
          <Route path="/newarrivals" element={<NewArrivals />}></Route>
          {/* authentication routes */}
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
