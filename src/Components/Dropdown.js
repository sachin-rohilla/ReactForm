import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
const Dropdown = () => {
  return (
    <>
      <InputLabel>City</InputLabel>
      <FormControl>
        <Select>
          <MenuItem value={1}>Chennai</MenuItem>
          <MenuItem value={2}>Mumbai</MenuItem>
          <MenuItem value={3}>Delhi</MenuItem>
          <MenuItem value={4}>Chandigarh</MenuItem>
          <MenuItem value={5}>Haryana</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
