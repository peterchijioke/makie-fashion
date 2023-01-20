import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppNavigation from "../layouts/Nav/AppNavigation";
import Home from "../pages/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function AppRoutes() {
  return (
    <div>
      <AppNavigation />
      <RouterProvider router={router} />
    </div>
  );
}
