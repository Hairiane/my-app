import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import Skeleton from "../assets/Skeleton";
import Paginator from "../Components/Paginator";
import { MyContext } from "../App";

const Home = () => {
const {SearchValue} = React.useContext(MyContext)
const [activeIndex, setActiveIndex] = React.useState(0)
const [items, setItems] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);
const [wordActive,setWordActive] = React.useState('популярности')
const [selectedPage,setSelectedPage] = React.useState(1)

React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://63e0cd60dd7041cafb39738c.mockapi.io/items?${`page=${selectedPage}`}&limit=4&}${`search = ${SearchValue}`}${!activeIndex ? '' : `category=${activeIndex}`}&${wordActive === 'популярности' ? 'sortBy=rating' : wordActive === 'цене' ? 'sortBy=price' : 'sortBy=name'}&order=desc `)
    .then((res) => res.json())
    .then((arr) => {
        setIsLoading(false);
        setItems(arr);
    });
    window.scrollTo(0,0)
}, [activeIndex,wordActive,SearchValue,selectedPage]);

return (
    <div className="container">
    <div className="content__top">
        <Categories value={activeIndex} setActiveIndex={(i) => setActiveIndex(i)}/>
        <Sort wordActive={wordActive} setWordActive={(i) => setWordActive(i)}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : items.filter((obj) => 
        // console.log(obj,SearchValue.toLowerCase())
       ( 
        obj.name.toLowerCase()
        .includes(SearchValue.toLowerCase())
        )
        ).map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
    </div>
    <Paginator selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
);
};

export default Home