import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registertHandler = (e) => {
    e.preventDefault();
    if (name && password) {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      navigate("/login");
    }
  };
  return (
    <div className="form-container">
      <form className="login-form">
        <TextField
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Name"
          name="Name"
          
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-input" type="submit" onClick={registertHandler}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
