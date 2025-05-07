import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => (
  <nav className={styles.authNav}>
    <NavLink
      to="/register"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Реєстрація
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Увійти
    </NavLink>
  </nav>
);

export default AuthNav;
