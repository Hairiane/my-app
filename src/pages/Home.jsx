import React from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import Skeleton from "../assets/Skeleton";
import Paginator from "../Components/Paginator";
import { MyContext } from "../App";
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoading, setActiveIndex,setWordActive } from '../redux/filter'
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Home = () => {
const isLoading = useSelector((state) => state.filter.isLoading)
const activeIndex = useSelector((state) => state.filter.activeIndex)
const wordActive= useSelector((state) => state.filter.wordActive)
const selectedPage= useSelector((state) => state.filter.selectedPage)
const dispatch = useDispatch()
const {SearchValue} = React.useContext(MyContext)
const [items, setItems] = React.useState([]);

React.useEffect(() => {
    dispatch(setIsLoading(true))
    axios.get(`https://63e0cd60dd7041cafb39738c.mockapi.io/items?${!activeIndex ? '' : `category=${activeIndex}&`}${`page=${selectedPage}`}&limit=4&${`search = ${SearchValue}`}&${wordActive === 'популярности' ? 'sortBy=rating' : wordActive === 'цене' ? 'sortBy=price' : 'sortBy=name'}&order=desc `)
    .then((arr) => {
            setItems(arr.data);
            dispatch(setIsLoading(false))
        })
    window.scrollTo(0,0)
}, [activeIndex, wordActive, SearchValue, selectedPage, dispatch]);

    return (
    <div className="container">
    <div className="content__top">
        <Categories value={activeIndex} setActiveIndex={(i) => dispatch(setActiveIndex(i))}/>
        <Sort wordActive={wordActive} setWordActive={(i) => dispatch(setWordActive(i))}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
        ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
        : items.filter((obj) => 
       ( 
        obj.name.toLowerCase()
        .includes(SearchValue.toLowerCase())
        )
        ).map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
    </div>
    <Paginator />
    </div>
);
};

export default Home