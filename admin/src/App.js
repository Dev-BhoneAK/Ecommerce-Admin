import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./components/common/Dashboard";
import Home from "./screens/Home";
import BrandList from "./screens/Brand/List";
import CategoryList from "./screens/Category/List";
import ProductList from "./screens/Product/List";
import ProductCreate from "./screens/Product/Create";
import ProductEdit from "./screens/Product/Edit";
import BlogList from "./screens/Blog/List";
import BlogCreate from "./screens/Blog/Create";
import BlogEdit from "./screens/Blog/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="admin" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="brands" element={<BrandList />} />
        <Route path="categories" element={<CategoryList />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/create" element={<ProductCreate />} />
        <Route path="products/:id" element={<ProductEdit />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/create" element={<BlogCreate />} />
        <Route path="blogs/:id" element={<BlogEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
