import React from "react";
import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppNavigation from "../layouts/Nav/AppNavigation";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function AppRoutes() {
  return (
    <div
      style={{ backgroundColor: "#000000", height: "100vh", width: "100vw" }}
    >
      <AppNavigation />
      <RouterProvider router={router} />
    </div>
  );
}
