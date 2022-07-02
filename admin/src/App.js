import {Route, Routes} from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./components/common/Dashboard";
import Home from './screens/Home';
import CategoryList from './screens/Category/List';
import ProductList from './screens/Product/List';
import Create from "./screens/Product/Create";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="admin" element={<Dashboard />}>
              <Route path="home" element={<Home />} />
              <Route path="categories" element={<CategoryList />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/create" element={<Create />} />
          </Route>

      </Routes>
  );
}

export default App;
