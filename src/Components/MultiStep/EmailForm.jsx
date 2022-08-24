import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Col, Row, Form } from "antd";
import AppInput from "../Input/Input";
import AppButton from "../Button/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email address"),
});

function EmailForm({ handleNameForm }) {
  const initialValues = {
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        handleNameForm(values);
        localStorage.setItem("email", values.email);
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
                placeholder="Enter your email address"
                values={values.email}
                touched={touched.email}
                error={errors.email}
                onChange={handleChange}
                name="email"
                type="email"
              />
            </Col>
            <Col span={24} className="text-center">
              <AppButton 
                disabled={isSubmitting} 
                label="Next" 
                onClick={handleSubmit} 
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default EmailForm;
