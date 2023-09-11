import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetail from "./components/ProductDetail";
import Header from "components/common/Header";
import Footer from "./components/common/Footer/Footer";
import PageNotFound from "screens/PageNotFound";
import LoadingSkeleton from "./components/ProductDetail/LoadingSkeleton";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
        {/*<Route path="/product/:id" element={<LoadingSkeleton />} />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
