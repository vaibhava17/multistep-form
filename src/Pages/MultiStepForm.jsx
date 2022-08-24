import React, { useState } from "react";
import { Steps, Typography } from "antd";
import EmailForm from "../Components/MultiStep/EmailForm";
import NameForm from "../Components/MultiStep/NameForm";
import PhoneNumber from "../Components/MultiStep/PhoneNumber";


function MultiStepForm() {
  const [current, setCurrent] = useState(0);

  const handleNameForm = (values) => {
    setCurrent(1);
    console.log(values, current);
  }

  const handlePhoneNumberForm = (values) => {
    setCurrent(2);
    console.log(values, current);
  }

  return (
    <div className="padding">
      <Typography.Title level={2} className="text-center">User Form</Typography.Title>
      <Steps current={current}>
        <Steps.Step title="User Email" key={0} />
        <Steps.Step title="User Details" key={1} />
        <Steps.Step title="Contact No." key={2} />
      </Steps>
      {current === 0 ? (
        <EmailForm handleNameForm={handleNameForm} />
      ) : current === 1 ? (
        <NameForm handlePhoneNumberForm={handlePhoneNumberForm} />
      ) : current === 2 ? (
        <PhoneNumber />
      ) : (
        <div>
          <h1>Error</h1>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
