import ReactPaginate from "react-paginate";
import styles from "./Paginator.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPage } from "../../redux/Filter/filterSlice";
import { RootState } from "../../redux/store";

export const Paginator = () => {
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
        pageCount={3}
        forcePage={selectedPage - 1}
      />
    </>
  );
};
