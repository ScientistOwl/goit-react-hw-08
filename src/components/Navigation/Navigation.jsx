import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Головна
    </NavLink>
    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Контакти
    </NavLink>
  </nav>
);

export default Navigation;
