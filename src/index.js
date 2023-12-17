import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Diagnosa from "./routes/Diagnosa";
import Riwayat from "./routes/Riwayat";
import Keterangan from "./routes/Keterangan";
import Kelompok from "./routes/Kelompok";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "diagnosa",
        element: <Diagnosa />,
      },
      {
        path: "riwayat",
        element: <Riwayat />,
      },
      {
        path: "keterangan",
        element: <Keterangan />,
      },
      {
        path: "kelompok",
        element: <Kelompok />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
