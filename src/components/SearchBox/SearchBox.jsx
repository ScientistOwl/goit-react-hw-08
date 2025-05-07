import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Пошук контакту..."
      onChange={handleSearch}
    />
  );
};

export default SearchBox;
