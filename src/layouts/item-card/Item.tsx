import React from "react";
import "./Item.scss";
import Foam from "../../images/foam.png";
import Blender from "../../images/blender.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faNairaSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navigate from "../../routes/Navigate";

export default function Item({ index }: any) {
  const navigate = useNavigate();
  const handleNavigateToProductPage = () => {
    const navigationObject = new Navigate();
    navigationObject.handleNavigate(navigate, `product`);
  };
  return (
    <div className="item-wrapper" onClick={handleNavigateToProductPage}>
      <div className="img-div">
        <img
          src={index === 0 || index === 5 || index === 0 ? Blender : Foam}
          alt="Blender"
        />
      </div>
      <div className="item-info">
        <div className="stock-name">
          <span className="name">Blender 2.1 for sale just .....</span>
          <span className="amount">
            <FontAwesomeIcon icon={faNairaSign} />
            20,000
          </span>
        </div>
        <FontAwesomeIcon className="icon-heart" icon={faHeart} />
      </div>
    </div>
  );
}
