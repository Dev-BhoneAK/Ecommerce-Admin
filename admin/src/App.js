import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./screens/Login";
import Dashboard from "./components/common/Dashboard";
import Home from "./screens/Home";
import BrandList from "./screens/Brand/List";
import CategoryList from "./screens/Category/List";
import ProductList from "./screens/Product/List";
import ProductCreate from "./screens/Product/Create";
import ProductReviews from "./screens/Product/Reviews";
import ProductEdit from "./screens/Product/Edit";
import BlogList from "./screens/Blog/List";
import BlogCreate from "./screens/Blog/Create";
import BlogEdit from "./screens/Blog/Edit";
import OrderList from "./screens/Order/List";
import OrderDetail from "./screens/Order/Detail";

const ProtectedRoute = ({ userInfo }) => {
  return userInfo ? <Outlet /> : <Navigate to="/" replace />;
};

function App() {
  const userInfo = useSelector((state) => state?.auth?.userInfo);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={userInfo ? <Navigate to="/admin/home" replace /> : <Login />}
      />
      <Route path="*" element={<ProtectedRoute userInfo={userInfo} />}>
        <Route path="admin" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="brands" element={<BrandList />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<ProductCreate />} />
          <Route path="products/review" element={<ProductReviews />} />
          <Route path="products/:id" element={<ProductEdit />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/create" element={<BlogCreate />} />
          <Route path="blogs/:id" element={<BlogEdit />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="orders/detail" element={<OrderDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
