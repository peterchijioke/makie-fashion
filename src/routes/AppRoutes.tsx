import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "../layouts/footer-section/Footer";
import AppNavigation from "../layouts/Nav/AppNavigation";
import Home from "../pages/home/Home";
import SingleProduct from "../pages/single-product/SingleProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <SingleProduct />,
  },
]);

export default function AppRoutes() {
  return (
    <div>
      <AppNavigation />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}
