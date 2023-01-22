import React from "react";
import Item from "./Item";
import "./ItemCard.scss";

export default function ItemCard() {
  return (
    <div id="wrapper-items">
      <span className="header-title">Popular Stock</span>
      <div className="grid-container">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <Item key={Math.random()} index={index} />
          ))}
      </div>
    </div>
  );
}
