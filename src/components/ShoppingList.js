import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredValue, setFilteredValue] = useState("All")
 // const [filteredItems, setFilteredItems] = useState(items)
  const changeValueHandler = (e)=>{
    setFilteredValue(e.target.value)
    // setFilteredItems(()=> items.filter(item => item.cate))
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeValueHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {(filteredValue === "All") ? 
      items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )):
         items.filter((item)=> item.category === filteredValue).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
       
      </ul>
    </div>
  );
}

export default ShoppingList;
