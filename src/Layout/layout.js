import React from "react";


import Header from "../components/Header/header";
import Sidebar from "../components/sidebar/sidebar";
import Routes from "../routes/routes";

function Layout() {
  return (
    <div>
      <Header />
      <div>
        <div className="dashboard__wrapper">
          <div className="">
            <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <Sidebar />
            </div>
              <Routes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
