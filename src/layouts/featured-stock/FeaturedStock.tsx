import React from "react";
import Item from "../item-card/Item";
import ItemCard from "../item-card/ItemCard";
import "./FeaturedStock.scss";

export default function FeaturedStock() {
  return (
    <div id="featured-stock-wrapper">
      <label className="header-title">Featured Stock</label>
      <div className="featued-stock-wrapper-inner">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Item />
          ))}
      </div>
    </div>
  );
}
