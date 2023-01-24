import React, { CSSProperties } from "react";
import "./CategorySection.scss";
import WatchImage from "../../images/wat.png";
import PhoneImage from "../../images/phone.png";
import PlusIcon from "../../images/plus.svg";
export default function CategoryCard() {
  return (
    <div className="banner-side one_">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div className="item-in-grid">
            {index === 0 ? (
              <div className="add-btn">
                <label htmlFor="Got Stuff?"> Got Stuff ?</label>
                <img className="image-plus" src={PlusIcon} />
              </div>
            ) : (
              <img
                style={{ width: 100, height: 100 }}
                className="image-cat"
                src={
                  index !== 0 && index !== 2 && index !== 5 && index !== 3
                    ? WatchImage
                    : PhoneImage
                }
              />
            )}
          </div>
        ))}

      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            style={{ marginTop: index === 0 ? 0 : "10px" }}
            className="card-item-one"
          >
            <div className="inner-row-item">
              <img
                // style={{ width: 45, height: 45 }}
                className="image-cat"
                src={
                  index !== 0 && index !== 2 && index !== 5 && index !== 3
                    ? WatchImage
                    : PhoneImage
                }
              />
            </div>
            <div className="inner-row-item-info">
              <div className="info-txt">
                <span>
                  {index !== 0 && index !== 2 && index !== 5 && index !== 3
                    ? "WATCH"
                    : "PHONES"}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
