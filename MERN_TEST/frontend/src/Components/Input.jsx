// src/ReusableInput.js
import React, { useState } from "react";

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  placeholder1,
  id,
  filename,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        className="form-control input"
      />
      <label htmlFor={name} className="file-label" for="uploadbtn">
        <span
          className="placeholder1"
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "#57BC90",
          }}
        >
          {placeholder1}
        </span>
        <span
          className="text-black m-3"
          style={{
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {filename}
        </span>
      </label>
    </div>
  );
};

export default Input;
