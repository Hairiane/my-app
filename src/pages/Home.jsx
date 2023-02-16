import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import Skeleton from "../assets/Skeleton";

const Home = () => {
const [items, setItems] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);

React.useEffect(() => {
    fetch("https://63e0cd60dd7041cafb39738c.mockapi.io/items")
    .then((res) => res.json())
    .then((arr) => {
        setIsLoading(false);
        setItems(arr);
    });
}, []);

return (
    <div className="container">
    <div className="content__top">
        <Categories />
        <Sort />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
    </div>
    </div>
);
};

export default Home