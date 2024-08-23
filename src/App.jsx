import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Men from "./pages/Men";
import All from "./pages/All";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Outlet />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="all" element={<All />} />
    //     <Route path="men" element={<Men />} />
    //     <Route path="women" element={<Women />} />
    //     <Route path="electronics" element={<Electronics />} />
    //     <Route path="product-detail" element={<ProductDetail />} />
    //     <Route path="cart" element={<Cart />} />
    //     <Route path="search" element={<Search />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
