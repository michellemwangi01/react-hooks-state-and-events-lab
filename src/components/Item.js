import React, { useState } from "react";

function Item({ name, category }) {
  const [liClassName, setLiClassName] = useState("")
  const [buttonTextHandler, setButtonTextHandler] = useState(true)
  const [buttonText, setButtonText] = useState("Add to Cart")


  const addToCartHandler = ()=>{
    setButtonTextHandler(!buttonTextHandler)
    buttonTextHandler ? setLiClassName("in-cart") : setLiClassName("") 
    buttonTextHandler ? setButtonText("Add to Cart") : setButtonText("Remove From Cart") 

  }
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCartHandler} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
