import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginator.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPage } from "../../redux/Filter/filterSlice";
import { RootState } from "../../redux/store";

const Paginator = () => {
  const selectedPage = useSelector(
    (state: RootState) => state.filter.selectedPage
  );
  const dispatch = useDispatch();
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispatch(setSelectedPage(event.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={5}
        forcePage={selectedPage - 1}
      />
    </>
  );
};

export default Paginator;
