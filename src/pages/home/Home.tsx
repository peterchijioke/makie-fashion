import React, { useState } from "react";
import "./Home.scss";
import ImageOne from "../../images/main2.png";
import ImageTwo from "../../images/main1.png";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container">
      <Row className="row-top">
        <Col className="inner-col" sm={8}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100" src={ImageOne} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img
                height={350}
                className="d-block w-100 h-100"
                src={ImageTwo}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="inner-coltwo" sm={4}>
          sm=4
        </Col>
      </Row>
    </div>
  );
}
