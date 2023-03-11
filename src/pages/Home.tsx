import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import Skeleton from "../assets/Skeleton";
import Paginator from "../Components/Paginator";
import { useSelector } from "react-redux";
import { setActiveIndex, setWordActive } from "../redux/Filter/filterSlice";
import { selectPizzaData } from "../redux/Pizza/PizzaSlice";
import { fetchPizzas } from "../redux/Pizza/asyncAction";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const { activeIndex, wordActive, selectedPage } = useSelector(
    (state: any) => state.filter
  );
  const { SearchValue } = useSelector((state: any) => state.cart);
  const { status, items } = useSelector(selectPizzaData);
  const dispatch = useAppDispatch();

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

  React.useEffect(() => {
    getPizzas();
  }, [activeIndex, wordActive, SearchValue, selectedPage]);

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
