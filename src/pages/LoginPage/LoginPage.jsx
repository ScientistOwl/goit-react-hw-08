import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => (
  <div className={styles.container}>
    <h2>Увійдіть у свій акаунт</h2>
    <LoginForm />
  </div>
);

export default LoginPage;
