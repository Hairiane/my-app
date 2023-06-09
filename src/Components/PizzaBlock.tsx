import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/Cart/CartSlice";
import { RootState } from "../redux/store";

type PropsType = {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export const PizzaBlock: React.FC<PropsType> = ({
  id,
  price,
  name,
  imageUrl,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.find((obj: { id: string }) => obj.id === id)
  );

  const addedCount = cartCount ? cartCount.count : 0;

  const [activeIndexSizes, setActiveIndexSizes] = React.useState(0);
  const [activeIndexTypes, setActiveIndexTypes] = React.useState(0);
  const SizeName = [26, 30, 40];
  const TypeSize = ["тонкое", "традиционное"];

  const Pizza = {
    id,
    price,
    name,
    imageUrl,
    sizes: SizeName[activeIndexSizes],
    types: TypeSize[activeIndexTypes],
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((value, i) => (
            <li
              key={i}
              onClick={() => setActiveIndexTypes(i)}
              className={activeIndexTypes === i ? "active" : ""}
            >
              {value === 1 ? "тонкое" : "традиционное"}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((value: number, i: number) => (
            <li
              key={i}
              onClick={() => setActiveIndexSizes(i)}
              className={activeIndexSizes === i ? "active" : ""}
            >
              {value} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          onClick={() => dispatch(addItem(Pizza))}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount ? <i>{addedCount}</i> : ""}
        </button>
      </div>
    </div>
  );
};
