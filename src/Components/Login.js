import TextField from "@mui/material/TextField";
import React, { useState } from "react";
const Login = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [login, setLogin] = useState(false);
  const [valid, setValid] = useState(false);
  const nameHandler = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const passwordHandler = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const loginHanlder = (e) => {
    if (values.name && values.password) {
      setValid(true);
    }
    e.preventDefault();

    setLogin(true);
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={loginHanlder}>
        {login && valid ? (
          <div className="login-message">Thank you for login</div>
        ) : (
          ""
        )}
        <TextField
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Name"
          name="Name"
          value={values.name}
          onChange={nameHandler}
        />
        {login && !values.name ? <span>Please enter your name</span> : ""}
        <TextField
          type="password"
          id="outlined-required"
          className="form-input"
          placeholder="Enter Your Password"
          value={values.password}
          onChange={passwordHandler}
        />
        {login && !values.password ? (
          <span>Please enter your password</span>
        ) : (
          ""
        )}
        <button className="form-input">Login</button>
      </form>
    </div>
  );
};

export default Login;
