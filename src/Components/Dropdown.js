import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import axios from "axios";

const Dropdown = () => {
  const [data, setData] = useState("");

  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        data +
        "&appid=e4b2c3bd2f677e854d83635398fe3a76"
    )
    .then((res) => {
      console.log("response", res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log("err", err);
    });

  const handle = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        {(data?.main?.temp - 273.15).toFixed(2)}°C
      </Typography>
      <InputLabel>City</InputLabel>
      <FormControl className="dropdown">
        <Select onChange={handle}>
          <MenuItem value="Chennai">Chennai</MenuItem>
          <MenuItem value="Mumbai">Mumbai</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Chandigarh">Chandigarh</MenuItem>
          <MenuItem value="Haryana">Haryana</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
