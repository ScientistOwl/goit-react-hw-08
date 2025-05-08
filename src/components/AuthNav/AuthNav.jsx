import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import styles from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.authNav}>
      {isLoggedIn ? (
        <button
          className={styles.logoutButton}
          onClick={() => dispatch(logout())}
        >
          Вийти
        </button>
      ) : (
        <>
          <NavLink to="/register" className={styles.link}>
            Реєстрація
          </NavLink>
          <NavLink to="/login" className={styles.link}>
            Увійти
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default AuthNav;
