import React from "react";
import {
  Categories,
  Sort,
  PizzaBlock,
  Skeleton,
  Paginator,
} from "../Components";
import { useSelector } from "react-redux";
import { setActiveIndex, setWordActive } from "../redux/Filter/filterSlice";
import { selectPizzaData } from "../redux/Pizza/PizzaSlice";
import { fetchPizzas } from "../redux/Pizza/asyncAction";
import { RootState, useAppDispatch } from "../redux/store";
import { Pizza } from "../redux/Pizza/types";

const Home: React.FC = () => {
  const { activeIndex, wordActive, selectedPage } = useSelector(
    (state: RootState) => state.filter
  );
  const { SearchValue } = useSelector((state: RootState) => state.cart);
  const { status, items } = useSelector(selectPizzaData);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getPizzas = async () => {
      dispatch(
        fetchPizzas({
          activeIndex,
          selectedPage,
          SearchValue,
          wordActive,
          sortBy: wordActive,
        })
      );
    };
    getPizzas();
  }, [activeIndex, wordActive, SearchValue, selectedPage, dispatch]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={activeIndex}
          setActiveIndex={React.useCallback(
            (i) => dispatch(setActiveIndex(i)),
            [dispatch]
          )}
        />
        <Sort
          wordActive={wordActive}
          setWordActive={React.useCallback(
            (i) => dispatch(setWordActive(i)),
            [dispatch]
          )}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading"
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj: Pizza) =>
                obj.name.toLowerCase().includes(SearchValue.toLowerCase())
              )
              .map((obj: Pizza) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Paginator />
    </div>
  );
};

export default Home;
