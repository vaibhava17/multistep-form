import React from "react";
import { Form, Select } from "antd";

function AppSelectInput(props) {
  const {
    placeholder = "Enter",
    size = "large",
    onChange,
    name,
    error,
    touched,
    label,
    options,
  } = props;

  return (
    <Form.Item
      validateStatus={error && touched ? "error" : ""}
      help={touched && error ? error : ""}
      label={label}
      colon={false}
      name={name}
    >
      <Select
        placeholder={placeholder}
        onChange={onChange}
        allowClear
        size={size}
      >
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value} label={option.label}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default AppSelectInput;
