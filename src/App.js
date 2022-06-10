import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
