import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginator.module.scss";

const Paginator = ({ selectedPage, setSelectedPage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => setSelectedPage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginator;
