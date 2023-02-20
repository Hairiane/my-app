import React from 'react'

export const ThemeContext = React.createContext(0);

function Categories({value,setActiveIndex}) {
  const categoriesPizza= ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

  return (
    <div className="categories">
      <ul>
      {categoriesPizza.map((categoryName,i) => <li key={i} onClick={() => setActiveIndex(i)} className={value === i ? "active" : ""}>{categoryName}</li>
      )}
      </ul>
      {/* <ThemeContext.Provider value={activeIndex}>
    </ThemeContext.Provider> */}
    </div>
  );
}

export default Categories