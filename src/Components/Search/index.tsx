import React from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
import { SetSearchValue } from "../../redux/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Search: React.FC = () => {
  const { SearchValue } = useSelector((state: RootState) => state.cart);
  const [valueTime, setValueTime] = React.useState(SearchValue);
  const InputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const ClearInput = (event: React.MouseEvent<SVGSVGElement>) => {
    dispatch(SetSearchValue(""));
    setValueTime("");
    InputRef.current?.focus();
  };

  const updateValueTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueTime(event.target.value);
    updateValue(event.target.value);
  };

  const updateValue = React.useCallback(
    debounce((value: string) => {
      dispatch(SetSearchValue(value));
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
