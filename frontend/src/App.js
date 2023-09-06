import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";
import Header from "components/common/Header";
import Footer from "./components/common/Footer/Footer";
import LoadingSkeleton from "./components/product-detail/LoadingSkeleton";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        {/*<Route path="/product/:id" element={<LoadingSkeleton />} />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
