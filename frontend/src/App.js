import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import { collectRoute } from "./routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {collectRoute.map((route) => (
            <Route key={route.name} element={route.element} path={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
