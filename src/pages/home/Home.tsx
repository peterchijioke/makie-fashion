import React, { useState } from "react";
import "./Home.scss";

import PopularStockSection from "../../layouts/item-card/ItemCard";
import BannerSection from "../../layouts/banner-section/Banner";
import FeaturedStockSection from "../../layouts/featured-stock/FeaturedStock";
import FooterSection from "../../layouts/footer-section/Footer";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };
  const [change, onChange] = useState();
  const onClickItem = () => {};
  const onClickThumb = () => {};
  return (
    <div className="home-container">
      <BannerSection />
      <PopularStockSection />
      <FeaturedStockSection />
      {/* <FooterSection /> */}
    </div>
  );
}
