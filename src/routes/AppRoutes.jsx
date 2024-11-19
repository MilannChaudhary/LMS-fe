import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import React from "react";
import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import BorrowHistory from "../pages/BorrowHistory";
import Reviews from "../pages/Reviews";
import Admins from "../pages/Admins";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import UserLayout from "../components/layout/UserLayout";

const publicRoutes = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: "signup",
    element: <Signup />,
    index: true,
  },
  {
    path: "login",
    element: <Login />,
    index: true,
  },
];
const privateRoutes = [
  {
    element: <Dashboard />,
    index: true,
  },
  {
    path: "books",
    element: <Books />,
  },
  {
    path: "borrow-history",
    element: <BorrowHistory />,
  },
  {
    path: "reviews",
    element: <Reviews />,
  },
  {
    path: "admins",
    element: <Admins />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {publicRoutes.map((item) => (
          <Route key={item.path + 1} {...item} />
        ))}
      </Route>
      <Route path="/user" element={<UserLayout />}>
        {privateRoutes.map((item) => (
          <Route key={item.path + 1} {...item} />
        ))}
      </Route>
    </Routes>
  );
};
