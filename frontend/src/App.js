import {Route,Routes} from 'react-router-dom';
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";
import LoadingSkeleton from "./components/product-detail/LoadingSkeleton";

function App() {
  return  (
      <Routes>
            <Route path="/" exact index element={<Home />} />
          {/*<Route path="product/:id" element={<ProductDetail />} />*/}
          <Route path="/product/:id" element={<LoadingSkeleton />} />
      </Routes>
  );
}

export default App;
