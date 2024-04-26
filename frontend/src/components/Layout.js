import React from "react";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <div>This is header bic</div>
      <Outlet />
    </>
  );
};

export default Layout;
