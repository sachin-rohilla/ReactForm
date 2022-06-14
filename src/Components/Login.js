import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const userName = localStorage.getItem("name");
    const userPassword = localStorage.getItem("password");
    if (name === userName && password === userPassword) {
      navigate("/dashboard");
    } else if (name !== userName || password === userPassword) {
      alert("Incorrect Name");
    } else if (password !== userPassword || name === userName) {
      alert("Incorrect Password");
    }
  };

  return (
    <div className="form-container">
      <form className="login-form">
        <TextField
          label="Name "
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Name"
          name="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-input" type="submit" onClick={submitHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
