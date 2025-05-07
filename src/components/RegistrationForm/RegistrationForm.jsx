import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Ім'я:
          <Field type="text" name="name" required />
        </label>
        <label>
          Email:
          <Field type="email" name="email" required />
        </label>
        <label>
          Пароль:
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Зареєструватися</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
