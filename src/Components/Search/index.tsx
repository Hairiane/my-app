import React from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";

type PropsType = {
  SearchValue: string;
  SetSearchValue: (a: string) => void;
};

const Search: React.FC<PropsType> = ({ SearchValue, SetSearchValue }) => {
  const [valueTime, setValueTime] = React.useState(SearchValue);
  const InputRef = React.useRef<HTMLInputElement>(null);

  const ClearInput = (event: any) => {
    SetSearchValue("");
    InputRef.current?.focus();
  };

  const updateValueTime = (event: any) => {
    setValueTime(event.target.value);
    updateValue(valueTime);
  };

  const updateValue = React.useCallback(
    debounce((value: string) => {
      SetSearchValue(value);
    }, 400),
    []
  );

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
        ref={InputRef}
        className={styles.input}
        value={valueTime}
        onChange={updateValueTime}
        placeholder="Введите название пиццы"
      />
      {SearchValue && (
        <svg
          onClick={ClearInput}
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
