import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik } from "formik";
import * as Yup from "yup";
import { Col, Row, Form } from "antd";
import AppInput from '../Input/Input';
import AppButton from '../Button/Button';

const validationSchema = Yup.object().shape({
  phonenumber: Yup.string()
    .length(10, "Phone number must be 10 digits")
    .matches('[0-9]{10}', "Invalid contact number")
    .required("Please enter your contact number"),
});

function PhoneNumber() {
  const navigate = useNavigate();

  const initialValues = {
    phonenumber: ""
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        navigate('/phone-verification')
        setSubmitting(true);
        localStorage.setItem("phonenumber", values.phonenumber);
        localStorage.setItem("otp", "1234");
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
                placeholder="Enter your contact number"
                values={values.phonenumber}
                touched={touched.phonenumber}
                error={errors.phonenumber}
                onChange={handleChange}
                name="phonenumber"
                type="tel"
              />
            </Col>
            <Col span={24} className="text-center">
              <AppButton
                label="Send OTP"
                disabled={isSubmitting}
                onClick={handleSubmit}
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default PhoneNumber