import React from "react";
import { Button } from 'antd';
function AppButton(props) {
  const { type = "primary", htmlType = "submit", label="Submit", onClick, disabled = false } = props;
  return (
    <Button type={type} htmlType={htmlType} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
}

export default AppButton;
