import React, { CSSProperties } from "react";
import "./CategorySection.scss";
import WatchImage from "../../images/wat.png";
import PhoneImage from "../../images/phone.png";
export default function CategoryCard() {
  return (
    <div className="banner-side one_">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            style={{ marginTop: index === 0 ? 0 : "10px" }}
            className="card-item-one"
          >
            <div className="inner-row-item">
              <img
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
