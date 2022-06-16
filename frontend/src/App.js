import {Route,Routes} from 'react-router-dom';
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return  (
      <Routes>
            <Route path="/" exact index element={<Home />} />
            <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
  );
}

export default App;
