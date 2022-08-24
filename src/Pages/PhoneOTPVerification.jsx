import React, { useState, useRef } from 'react'
import AppInput from '../Components/Input/Input';
import AppButton from '../Components/Button/Button';
import { Modal, Typography, Row, Col, Form } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  otp: Yup.string().required("Please enter your OTP"),
});

function PhoneOTPVerification() {
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const otpFormRef = useRef();

  const handleOtpVerification = (value) => {
    if (localStorage.getItem("otp") === value) {
      setSuccessAlert(true);
    } else {
      setErrorAlert(true);
    }
  }

  const handleSuccessCancel = () => {
    setSuccessAlert(false);
    otpFormRef.current.resetForm();
  }

  const handleErrorCancel = () => {
    setErrorAlert(false);
    otpFormRef.current.resetForm();
  }

  const divStyle = {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: "20vh",
  }

  const initailValues = {
    otp: "",
  }
  return (
    <div className="padding">
      <Typography.Title level={2} className="text-center">Please Verify OTP</Typography.Title>
      <Formik
        innerRef={otpFormRef}
        initialValues={initailValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleOtpVerification(values.otp);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row type={"flex"} justify={"center"} className="padding">
              <Col span={24}>
                <AppInput
                  placeholder="Enter your OTP"
                  values={values.otp}
                  touched={touched.otp}
                  error={errors.otp}
                  onChange={handleChange}
                  name="otp"
                  type="text"
                />
              </Col>
              <Col span={24} className="text-center">
                <AppButton
                  disabled={isSubmitting}
                  label="Verify OTP"
                  onClick={handleSubmit}
                />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <Modal
        visible={successAlert}
        footer={null}
        centered
        onCancel={handleSuccessCancel}
      >
        <div style={divStyle}>
          <Typography.Title level={4}>{localStorage.getItem("phonenumber")} ✅</Typography.Title>
          <Typography.Text>{localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")}, You have successfully verified your contact number.</Typography.Text>
          <AppButton label={"Cool"} onClick={handleSuccessCancel} />
        </div>
      </Modal>
      <Modal
        visible={errorAlert}
        footer={null}
        centered
        onCancel={handleErrorCancel}
      >
        <div style={divStyle}>
          <Typography.Title level={4}>{localStorage.getItem("phonenumber")} ❌</Typography.Title>
          <Typography.Text>{localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")}, You have entered invalid otp.</Typography.Text>
          <Typography.Text>Verification Failed! Please try again.</Typography.Text>
          <AppButton label={"Ok"} onClick={handleErrorCancel} />
        </div>
      </Modal>
    </div>
  )
}

export default PhoneOTPVerification