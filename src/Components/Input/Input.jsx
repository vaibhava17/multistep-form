import React from "react";
// import { Input } from "@mui/material";
import { Form, Input } from "antd";


function AppInput(props) {
  const {
    placeholder = "Enter",
    type = "text",
    size = "large",
    onChange,
    name,
    error,
    touched,
    label,
  } = props;
  
  return (
    <Form.Item
      validateStatus={error && touched ? "error" : ""}
      help={touched && error ? error : ""}
      label={label}
      colon={false}
    >
      <Input
        placeholder={placeholder}
        type={type}
        size={size}
        onChange={onChange}
        name={name}
      />
    </Form.Item>
  );
}

export default AppInput;
