import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { context } from "../../App";
import s from "./ProductPage.module.css";

const SizeDropdown = () => {
  const consumer = useContext(context);

  const handleChange = (event) => {
    consumer.setSize(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth error={consumer.error}>
        <InputLabel id="demo-simple-select-label" className={s.sizeHeader}>
          Size
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={consumer.size}
          label="Size"
          onChange={handleChange}
          required
        >
          <MenuItem value={"Small"}>Small</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Large"}>Large</MenuItem>
        </Select>
      </FormControl>
      <button type="button" onClick={() => consumer.setError(!consumer.size)}>
        Submit
      </button>
    </div>
  );
};

export default SizeDropdown;
