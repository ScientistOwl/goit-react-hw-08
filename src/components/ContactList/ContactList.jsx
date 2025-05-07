import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span>
            {name}: {number}
          </span>
          <button
            className={styles.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
