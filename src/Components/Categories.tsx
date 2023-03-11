import React from "react";

export const ThemeContext = React.createContext(0);

type PropsType = {
  value: number;
  setActiveIndex: (i: number) => void;
};

let Categories: React.FC<PropsType> = React.memo(
  ({ value, setActiveIndex }) => {
    const categoriesPizza = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];
    return (
      <div className="categories">
        <ul>
          {categoriesPizza.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => setActiveIndex(i)}
              className={value === i ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
