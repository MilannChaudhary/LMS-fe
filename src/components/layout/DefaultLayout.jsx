import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      {/* header  */}
      <Header />

      <main className="main  ">
        {/* children */}
        <main className="main">
          <Outlet />
        </main>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
