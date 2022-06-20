import {Route, Routes} from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import List from './screens/Category/List';
import Add from "./screens/Product/Add";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="admin">
              <Route path="home" element={<Home />} />
              <Route path="categories" element={<List />} />
              <Route path="products/add" element={<Add />} />
          </Route>

      </Routes>
  );
}

export default App;
