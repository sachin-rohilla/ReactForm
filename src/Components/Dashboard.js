import React from "react";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
    
  };
  
  return (
    <>
  <div>
    <Dropdown/>
  </div>
  
      <h1>You are successfully login</h1>
      <button onClick={loginHandler}>Logout</button>
    
    </>
  );
};

export default Dashboard;
