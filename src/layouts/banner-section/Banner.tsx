import React from "react";
import "./Banner.scss";
import ImageOne from "../../images/gigi.gif";
import ImageTwo from "../../images/hh.jpg";
import ImageCat from "../../images/bsb.jpg";
import ImageCat2 from "../../images/del.png";

import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CategoryCard from "../category-card/CategoryCard";

export default function Banner() {
  return (
    <div className="banner-section">
      <div className="carousel-container">
        <Carousel
          useKeyboardArrows
          showStatus={false}
          showIndicators
          showThumbs={false}
          infiniteLoop={true}
        >
          <div>
            <img className="image-carousel" src={ImageOne} />
          </div>
          <div>
            <img className="image-carousel" src={ImageOne} />
          </div>
          <div>
            <img className="image-carousel" src={ImageTwo} />
          </div>
          <div>
            <img className="image-carousel" src={ImageTwo} />
          </div>
        </Carousel>
      </div>
      <div className="banner-side ads-section-top">
        <div className="cat-item-cat">
          <img className="image-carousel" src={ImageCat} />
        </div>
        <div className="cat-item-cat">
          <img className="image-carousel" src={ImageCat2} />
        </div>
      </div>
      <CategoryCard />
    </div>
  );
}
