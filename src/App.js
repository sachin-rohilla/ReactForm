import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

function App() {
  let isLogin=false
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLogin?<Dashboard/>:<Navigate to="/login" replace/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
