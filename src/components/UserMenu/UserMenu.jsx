import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <p>Вітаємо, {user.name}!</p>
      <button onClick={() => dispatch(logout())}>Вийти</button>
    </div>
  );
};

export default UserMenu;
