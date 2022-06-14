import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const registertHandler = (e) => {
    e.preventDefault();
    if (name && password === confirmPassword) {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);

      navigate("/login");
    } else if (name === "") {
      alert("Please Enter Name");
    } else if (password !== confirmPassword) {
      alert("Password Incorrect");
    }
  };
  return (
    <div className="form-container">
      <form className="login-form">
        <TextField
          label="Name"
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Name"
          name="Name"
          minimum={8}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Password"
          erorText="Please enter only 8 digits number"
          inputProps={{ minLength: 8 }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          id="outlined-required"
          className="form-input"
          placeholder="Confirm Your Password"
          erorText="Please enter only 8 digits number"
          inputProps={{ minLength: 8 }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" onClick={registertHandler}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
