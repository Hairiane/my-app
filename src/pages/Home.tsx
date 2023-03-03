import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import Skeleton from "../assets/Skeleton";
import Paginator from "../Components/Paginator";
import { useSelector, useDispatch } from "react-redux";
import { setActiveIndex, setWordActive } from "../redux/Filter/filterSlice";
import { fetchPizzas, selectPizzaData } from "../redux/Pizza/PizzaSlice";

const Home = () => {
  const { activeIndex, wordActive, selectedPage } = useSelector(
    (state: any) => state.filter
  );
  const { SearchValue } = useSelector((state: any) => state.cart);
  const { status, items } = useSelector(selectPizzaData);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPizzas = async () => {
    dispatch(
      fetchPizzas({
        activeIndex,
        selectedPage,
        SearchValue,
        wordActive,
      })
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [activeIndex, wordActive, SearchValue, selectedPage, dispatch, getPizzas]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={activeIndex}
          setActiveIndex={(i) => dispatch(setActiveIndex(i))}
        />
        <Sort
          wordActive={wordActive}
          setWordActive={(i) => dispatch(setWordActive(i))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading"
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj: any) =>
                obj.name.toLowerCase().includes(SearchValue.toLowerCase())
              )
              .map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Paginator />
    </div>
  );
};

export default Home;
