import React from "react";

import styles from "./Search.module.scss";

const Search = ({ SearchValue, SetSearchValue }) => {
  console.log(SearchValue);
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
      <input
        className={styles.input}
        value={SearchValue}
        onChange={(event) => SetSearchValue(event.target.value)}
        placeholder="Введите название пиццы"
      />
      {SearchValue && (
        <svg
          onClick={() => SetSearchValue("")}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
