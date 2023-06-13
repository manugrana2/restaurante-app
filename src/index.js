import * as React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bookings from "./Pages/Bookings/Bookings";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookingConfirmation from "./Pages/Bookings/Confirmation/BookingConfirmation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/bookings",
    element: <Bookings/>,
  },
  {
    path: "/bookings/confirmation",
    element: <BookingConfirmation/>
  }
]);

createRoot(document.getElementById("root")).render(
  <>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer />
  </>

);