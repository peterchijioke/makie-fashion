import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../layouts/footer-section/Footer";
import AppNavigation from "../layouts/Nav/AppNavigation";
import Home from "../pages/home/Home";
import SingleProduct from "../pages/single-product/SingleProduct";
const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<SingleProduct />} />
  </Routes>
);

export default function AppRoutes() {
  return (
    <Fragment>
      <AppNavigation />
      <AppRoute />
      <Footer />
    </Fragment>
  );
}
