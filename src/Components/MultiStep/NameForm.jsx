import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Col, Row, Form } from "antd";
import AppInput from "../Input/Input";
import AppSelectInput from "../SelectInput/Selectinput";
import AppButton from "../Button/Button";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your given name"),
  lastName: Yup.string().required("Please enter your family name"),
  gender: Yup.string().required("Please select your gender"),
  age: Yup.number().required("Please enter your age"),
});


function NameForm({ handlePhoneNumberForm }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    age: undefined,
    gender: "",
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("hello");
        setSubmitting(true);
        handlePhoneNumberForm(values);
        localStorage.setItem("firstName", values.firstName);
        localStorage.setItem("lastName", values.lastName);
        localStorage.setItem("age", values.age);
        localStorage.setItem("gender", values.gender);
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
        setFieldValue,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Row type={"flex"} justify={"center"} className="padding">
            <Col span={24}>
              <AppInput
                placeholder="Enter your first name"
                values={values.firstName}
                touched={touched.firstName}
                error={errors.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
              />
            </Col>
            <Col span={24}>
              <AppInput
                placeholder="Enter your last name"
                values={values.lastName}
                touched={touched.lastName}
                error={errors.lastName}
                onChange={handleChange}
                name="lastName"
                type="text"
              />
            </Col>
            <Col span={24}>
              <AppSelectInput
                placeholder="Enter your gender"
                values={values.gender}
                touched={touched.gender}
                error={errors.gender}
                onChange={(e)=>{
                  setFieldValue("gender", e);
                }}
                name="gender"
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                  { label: "Other", value: "Other" }
                ]}
              />
            </Col>
            <Col span={24}>
              <AppInput
                placeholder="Enter your age"
                values={values.age}
                touched={touched.age}
                error={errors.age}
                onChange={handleChange}
                name="age"
                type="number"
              />
            </Col>
            <Col span={24} className="text-center">
              <AppButton 
                label="Next" 
                disabled={isSubmitting} 
                onClick={handleSubmit} 
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default NameForm;
