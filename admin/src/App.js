import {Route, Routes} from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="admin">
              <Route path="dashboard" element={<Dashboard />} />
          </Route>

      </Routes>
  );
}

export default App;
