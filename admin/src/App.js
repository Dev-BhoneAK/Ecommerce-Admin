import {Route, Routes} from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="admin">
              <Route path="home" element={<Home />} />
          </Route>

      </Routes>
  );
}

export default App;
