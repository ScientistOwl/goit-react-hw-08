import React from "react";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.css";

const AppBar = () => (
  <header className={styles.appBar}>
    <Navigation />
    <div className={styles.authNav}>
      <AuthNav />
    </div>
  </header>
);

export default AppBar;
