import React from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  
  const categoriesPizza= ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

  return (
    <div className="categories">
      <ul>
      {categoriesPizza.map((value,i) => <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? "active" : ""}>{value}</li>
      )}
      </ul>
    </div>
  );
}

export default Categories